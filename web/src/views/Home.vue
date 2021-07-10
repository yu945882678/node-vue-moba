<template>
  <div class="home">
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/images/c2420bf0703ab4289c7329f9d5e94954.jpeg">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/b35ebf910499536195d0195bae757390.jpeg">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/5f5aa364e51675d31c012d0b454fdb49.jpeg">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons mt-3 text-center">
      <div class="nav-item bg-white  d-flex flex-wrap pt-3 ai-center">
        <div class="nav-items-icon  mb-3 text-grey-1 fs-sm" v-for="item in 12" :key="item">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <m-list-card icon="menu1" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link tag="div" :to="`/article/${news._id}`" class="py-2 d-flex" v-for="(news, i) in category.newsList" :key="i">
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
          <span class="text-grey-1">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>
    <m-list-card icon="menu1" title="英雄列表" :categories="heroesCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap text-center">
          <div class="py-2 " style="width:20%" v-for="(heroes, i) in category.heroesList" :key="i">
            <img class="w-100 px-2" :src="heroes.avatar" alt="">
            <div>{{ heroes.name }}</div>
          </div>
        </div>
      </template>
    </m-list-card>
    <m-card icon="menu1" title="精彩视频"></m-card>
    <m-card icon="menu1" title="图文攻略"></m-card>

  </div>
</template>

<script>
// @ is an alias to /src
import dayjs from 'dayjs'
export default {
  name: 'Home',
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD')
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true
      },
      newsCats: [],
      heroesCats: []
    }
  },
  created() {
    this.getNewsCates()
    this.getHeroesCates()
  },
  methods: {
    async getNewsCates() {
      const res = await this.$http.get('/news/list')
      this.newsCats = res.data
    },
    async getHeroesCates() {
      const res = await this.$http.get('/heroes/list')
      this.heroesCats = res.data
    }
  },
}
</script>
<style lang="scss">
@import "../assets/scss/_variables.scss";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: #fff;
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-items-icon {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>