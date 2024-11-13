<template>
  <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <div class="statistic-card">
      <h3 class="title">{{ title }}</h3>
      <img :src="imgSrc" alt="Statistic Image" class="image" />
      <div class="tags">
        <span v-for="(tag, index) in tagList" :key="index" class="tag">{{ tag }}</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'StatisticCard',
  props: {
    title: String,
    imgSrc: String,
    tagList: Array,
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = 'translateY(40px)';
      el.style.transition = 'none';
    },
    enter(el, done) {
      el.offsetHeight; // 强制重排
      el.style.transition = 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      done();
    },
    leave(el, done) {
      el.style.transition = 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out';
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px)';
      done();
    }
  }
};
</script>

<style scoped>
.statistic-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  /* 减少内边距 */
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 380px;
  /* 调整固定高度 */
  opacity: 0;
  /* 初始透明度 */
}

.statistic-card:hover {
  transform: scale(1.05) translateY(-5px);
  /* 微小上移并放大 */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  /* 强化阴影 */
  cursor: pointer;
}

.title {
  font-size: 1.1em;
  /* 小幅度减小字体大小 */
  font-weight: bold;
  margin-bottom: 8px;
  /* 调整标题与下方元素的间距 */
}

.image {
  width: 100%;
  height: 250px;
  /* 缩小图片的高度 */
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
  /* 调整图片与标签之间的间距 */
}

.tags {
  display: flex;
  justify-content: center;
  gap: 8px;
  /* 调整标签之间的间距 */
  flex-wrap: wrap;
}

.tag {
  background-color: #e0e0e0;
  border-radius: 20px;
  padding: 5px 8px;
  /* 减小标签内边距 */
  font-size: 0.85em;
  /* 标签字体略小 */
}

/* 动画效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(40px);
  /* 起始位置稍微偏移 */
}
</style>
