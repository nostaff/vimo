<template>
    <div class="swiper-slide">
        <template v-if="zoom">
            <div class="swiper-zoom-container">
                <slot></slot>
            </div>
        </template>
        <template v-else>
            <slot></slot>
        </template>
    </div>
</template>
<script type="text/javascript">
  /**
   * @component Slides/Slide
   * @description
   *
   * ## 轮播组件 / Slide组件
   * */
  export default {
    name: 'vm-slide',
    data () {
      return {
        zoom: false,
        slidesComponent: null
      }
    },
    created () {
      if (this.$parent.$options.name.toLowerCase() === 'vm-slides') {
        this.slidesComponent = this.$parent
        this.zoom = this.slidesComponent.zoom
        this.slidesComponent.initSlides()
      }
    }
  }
</script>
