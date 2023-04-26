<template>
  <div class="top-toolbar">
    <div class="toolbar">
      <!--欢迎标语-->
      <div class="left">
        <span class="welcome">添点生鲜，添点健康！</span>
      </div>
      <!--右侧工具栏-->
      <div class="right">
        <ul>
          <li><a href="#">登录</a></li>
          <li><a class="red" href="#">注册</a></li>
          <li><a href="#">用户中心</a></li>
          <li><a class="red" href="#"><i class="iconfont">&#xe73c;</i>购物车</a></li>
          <li><a href="#">我的订单</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toolbar"
}
</script>

<style lang="less" scoped>
.top-toolbar{
  width: 100%;
  background-color: #EFEFEF;

  .toolbar {
    height: 36px;
    width: 1200px;
    margin: 0 auto;
    line-height: 36px;

    .left {
      float: left;

      .welcome {
        margin-left: 10px;
      }
    }

    .right {
      float: right;

      ul > li {
        float: left;
        padding: 0 10px;
      }
    }
  }
}
</style>