<template>
  <div class="team-intro-container">
    <div class="container">
      <div class="title inner-title-border">团队介绍</div>
      <div class="team-item-list">
        <div class="arrow">
          <img src="./../assets/images/team_left.png" alt="">
        </div>
        <div class="item-box">
          <img src="./../assets/images/photo_1.png" alt />
          <div class="item-detail">
            <p>马克·怀德</p>
            <p>CEO</p>
          </div>
        </div>
        <div class="item-box-text">
          <div class="item-title">
            约翰·纳特尔斯
          </div>
          <div class="item-job">
            CFO
          </div>
          <div class="item-line"></div>
          <div class="item-text">
            约翰·纳特尔斯 John Nettles，美国著名经济学家，芝加哥大学教授、芝加哥经济学派领军人物、货币学派的代表人物，1976年诺贝尔经济学奖得主、1951年约翰·贝茨·克拉克奖得主。 弗里德曼被广泛誉为二十世纪最具影响力的经济学家及学者之一。以研究宏观经济学、微观经济学、经济史、统计学、主张自由放任资本主义而闻名。
          </div>
        </div>
        <div class="item-box">
          <img src="./../assets/images/photo_2.png" alt />
          <div class="item-detail">
            <p>保罗·沃克</p>
            <p>CTO</p>
          </div>
        </div>
        <div class="arrow">
          <img src="./../assets/images/team_right.png" alt="">
        </div>
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

<style lang="scss" scoped>
  .team-intro-container {
    width: 100%;
    text-align: left;
    margin-left: 24%;
    position: relative;
    .container{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
    }
    .title {
      margin-top: 230px;
      display: inline-block;
      margin-bottom: 40px;
      font-size: 30px;
    }
    .team-item-list {
      display: flex;
      position: relative;
      width: 100%;
      flex-wrap: wrap;
      align-items: center;
      justify-items: center;
      .item-box {
        margin: 9px;
        position: relative;
        img {
          width: 100%;
        }
        width: 27%;
        .item-detail{
          position: absolute;
          bottom: 0;
          background-color: #022302;
          opacity:0.7;
          width: 100%;
          color: #fff;
          padding: 14px 24px;
          font-size: 16px;
          p:first-child{
            font-size: 18px;
          }
        }
      }
      .item-box-text {
        width: 27%;
        margin: 9px;
        height: 384px;
        background: rgba(2, 35, 2, 1);
        opacity: 0.7;

        color: white;
        padding: 38px 24px;
        .item-title{
          font-size: 18px;
        }
        .item-job{
          font-size: 16px;
        }
        .item-line{
          width: 100%;
          height: 1px;
          background-color: #D8D8D8;
          margin: 14px 0 12px;
        }
        .item-text{
          font-size: 14px;
          line-height: 24px;
        }
      }
      .arrow {
        cursor: pointer;
        margin: 9px;
        img {
          width: 100%;
        }
        width: 48px;
        height: 48px;
      }
    }
  }
</style>
