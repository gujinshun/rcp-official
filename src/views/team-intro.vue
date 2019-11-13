<template>
  <div class="container">
    <div class="title inner-title-border">团队介绍</div>
    <div class="team-item-list">
      <div class="arrow">
          <img src="./../assets/images/team_left.png" alt="">
      </div>
      <div class="item-box">
        <img src="./../assets/images/photo_1.png" alt />
      </div>
      <div
        class="item-box-text"
      >约翰·纳特尔斯 John Nettles，美国著名经济学家，芝加哥大学教授、芝加哥经济学派领军人物、货币学派的代表人物，1976年诺贝尔经济学奖得主、1951年约翰·贝茨·克拉克奖得主。 弗里德曼被广泛誉为二十世纪最具影响力的经济学家及学者之一。以研究宏观经济学、微观经济学、经济史、统计学、主张自由放任资本主义而闻名。</div>
      <div class="item-box">
        <img src="./../assets/images/photo_2.png" alt />
      </div>
      <div class="arrow">
          <img src="./../assets/images/team_right.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
.container {
  background-image: url("./../assets/images/home_technology_bj.png");
  background-size: 100% 100%;
  width: 100%;
  padding-left: 466px;
  text-align: left;

  .title {
    margin-top: 132px;
    display: inline-block;
    margin-bottom: 32px;
  }
  .team-item-list {
    display: flex;
    position: relative;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    .item-box {
      margin: 9px;
      img {
        width: 100%;
      }
      width: 158px;
      height: 216px;
    }
    .item-box-text {
      margin: 9px;
      width: 158px;
      height: 216px;
      background: rgba(2, 35, 2, 1);
      opacity: 0.7;
      font-size: 2px;
      color: white;
      padding: 5px;
    }
    .arrow {
        cursor: pointer;
        margin: 9px;
        img {
            width: 100%;
        }
        width: 27px;
        height: 27px;
    }
  }
}
</style>
