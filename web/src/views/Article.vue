<template>
  <div>
    <h2>
      {{ model.title }}
    </h2>
    <div v-html="model.body"></div>
  </div>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      model: {}
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/articles/${this.id}`)
      this.model = res.data
      console.log(this.model)
    }
  }
}
</script>