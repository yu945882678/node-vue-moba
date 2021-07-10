module.exports = app => {
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../../models/AdminUser')
    const assert = require('http-assert')
    const router = express.Router({
        mergeParams: true
    })
    const authMiddleWare = require('../../middleware/auth')
    const resourceMiddleWare = require('../../middleware/resource')
    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })

    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })

    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            success: true
        })
    })


    router.get('/', async (req, res) => {
        const queryOptions = {}
        if (req.Model.modelName === 'Category') {
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(100)
        res.send(items)
    })

    router.get('/:id', async (req, res) => {
        const item = await req.Model.findById(req.params.id)
        res.send(item)
    })

    app.use('/admin/api/rest/:resource', authMiddleWare(), resourceMiddleWare(), router)

    const multer = require('multer')
    const upload = multer(({
        dest: require('path').join(__dirname, '/../../uploads')
    }))
    app.post('/admin/api/upload', authMiddleWare(), upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    app.post('/admin/api/login', async (req, res) => {
        const {
            username,
            password
        } = req.body

        var user = await AdminUser.findOne({
            username
        }).select('+password')
        assert(user, 422, '用户名不存在')
        const isValid = require('bcryptjs').compareSync(password, user.password)
        assert(isValid, 422, '密码不正确')
        const token = jwt.sign({
            id: user._id
        }, app.get('secret'))
        res.send({
            token
        })
    })
    app.use(async (err, req, res, next) => {
        res.status(err.status || 500).send({
            message: err.message
        })
    })
}