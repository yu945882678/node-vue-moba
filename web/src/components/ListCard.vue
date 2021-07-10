<template>
  <m-card :icon="icon" :title="title">
    <div class="nav jc-between">
      <div class="nav-item" :class="{active: active === i}" v-for="(category, i) in categories" :key="i" @click="handleSlideTo(i)">
        <div class="nav-link">{{category.name}}</div>
      </div>
    </div>
    <div class="pt-3">
      <swiper ref="list" :options="{autoHeight: true}" @slide-change="() => active = $refs.list.$swiper.activeIndex">
        <swiper-slide v-for="(category, i) in categories" :key="i">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-card>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    categories: { type: Array, required: true }
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    handleSlideTo(i) {
      console.log(this.$refs.list.$swiper)
      this.$refs.list.$swiper.slideTo(i, 1000, false)
    }
  },
};
</script>

<style>
</style>