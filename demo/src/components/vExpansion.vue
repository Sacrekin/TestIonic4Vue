<template>
    <div class="accordion">
        <div class="header" @click="toggle" :style="{'background-color': color, 'border-color': color, 'color': textColor}">
            {{header}}
            <i class="header-icon" :class="{ rotate: show }">⯆</i>
        </div>
        <transition name="accordion"
            @before-enter="beforeEnter" @enter="enter"
            @before-leave="beforeLeave" @leave="leave">
            <div class="body" v-show="show">
                <div :style="{'background-color': 'white', 'border': '2px solid '+color}">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

export default {
  name: 'vExpansion',

  props: {
    color: {
        type: String,
        default: "lightgrey"
    },
    textColor: {
        type: String,
        default: "black"
    },
    header: {
        type: String,
        default: "No Title"
    }
  },

  data () {
    return {
        show: false
    }
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    },
    // enter: function(el, done) {
    //   $(el).slideDown(150, done);
    // },
    // leave: function(el, done) {
    //   $(el).slideUp(150, done);
    // },
    beforeEnter: function(el) {
      el.style.height = '0';
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    leave: function(el) {
      el.style.height = '0';
    }
  }
}

</script>

<style scoped>
i {
    font-style: normal;
    font-size: 150%;
}
.accordion {
  max-width: 400px;
  margin-bottom: 20px;
  border-radius: 6px;
}

.accordion .header {
  height: 40px;
  line-height: 40px;
  padding: 0 40px 0 8px;
  position: relative;
  cursor: pointer;
}

.accordion .header-icon {
  position: absolute;
  top: 0px;
  right: 8px;
  transform: rotate(0deg);
  transition-duration: 0.3s;
}

.accordion .body {
/*   display: none; */
  overflow: hidden;
  background-color: #fff;;
  border-top: 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  transition: 150ms ease-out;
}

.accordion .body-inner {
  padding: 8px;
  text-align: center;
  overflow-wrap: break-word;
/*   white-space: pre-wrap; */
}

.accordion .header-icon.rotate {
  transform: rotate(180deg);
  transition-duration: 0.3s;
}

</style>
