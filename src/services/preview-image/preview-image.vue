<template>
    <section class="vm-previewImage previewImage">
        <transition name="previewImage">
            <div class="previewImage__inner" v-show="images.length>0">
                <p text-center class="info">{{activeIndex + 1}} / {{images.length}}</p>
                <vm-slides class="slides"
                        :preloadImages="false"
                        :lazyLoading="true"
                        :initialSlide="activeIndex"
                        :zoom="true"
                        @onClick="onClickHandler"
                        @onSlideChangeEnd="onSlideChangeEndHandler">
                    <vm-slide class="slide" v-for="(item,index) in images" :key="index">
                        <img :data-src="item" class="swiper-lazy">
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </vm-slide>
                </vm-slides>
            </div>
        </transition>
    </section>
</template>
<style lang="scss">

    .vm-previewImage.previewImage {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #000;

        .previewImage__inner {
            width: 100%;
            height: 100%;
            .slides {
                height: 100%;
                width: 100%;
                .slide {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                        width: 100%;
                    }
                }
            }
            .info {
                position: fixed;
                bottom: 0;
                padding: 20px 0;
                background: rgba(0, 0, 0, 0.7);
                width: 100%;
                text-align: center;
                color: #fff;
                margin: 0;
                font-weight: bold;
                z-index: 10;
            }
        }
    }

    // transition
    .previewImage-enter-active, .previewImage-leave-active {
        transition: opacity 300ms
    }

    .previewImage-enter, .previewImage-leave-active {
        opacity: 0
    }
</style>
<script type="text/javascript">
  import Modal from '../modal/index'
  import { Slides, Slide } from '../../components/slides/index'

  export default {
    name: 'vm-preview-image',
    data () {
      return {
        selected: '',
        images: [],
        activeIndex: 0 // initIndex
      }
    },
    methods: {
      onSlideChangeEndHandler (instance) {
        this.activeIndex = instance.activeIndex
        this.selected = this.images[this.activeIndex]
      },
      onClickHandler () {
        Modal.dismiss('Dismiss modal from preview-image!')
      }
    },
    created () {
      this.images = this.$options.$data.urls
      this.activeIndex = this.$options.$data.current
      this.selected = this.images[this.activeIndex]
    },
    components: {Slides, Slide}
  }
</script>
