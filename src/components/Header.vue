<template>
  <div class="top-header">
    <!--左侧logo图标-->
    <a class="left" href="#"></a>
    <!--右侧搜索框-->
    <div class="right">
      <div class="search">
        <input type="text" placeholder="请输入想要购买的商品">
        <button>搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="less" scoped>
.top-header {
  width: 1200px;
  height: 110px;
  margin: 0 auto;

  .left {
    display: inline-block;
    width: 300px;
    height: 110px;
    float: left;
    background-image: url("../assets/images/logo.png");
    background-repeat: no-repeat;
    background-size: auto;
  }

  .right {
    float: right;
    width: 680px;
    margin-right: 220px;

    .search{
      height: 110px;
      position: relative;

      input {
        width: 600px;
        height: 50px;
        position: absolute;
        top: 30px;
        outline: none;
        border: #009401 solid 1px;
        padding-left: 20px;
      }
      button{
        width: 120px;
        height: 52px;
        position: absolute;
        right: 0;
        top: 30px;
        background-color: #009401;
        color: #fff;
        font-size: 16px;
        border-style: none;
        border-radius: 5px;
      }
    }
  }
}
</style>