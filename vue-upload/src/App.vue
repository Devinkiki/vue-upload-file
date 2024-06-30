<template>
  <div id="app">
    <div class="container" style="width:600px">
      <!-- <div style="margin: 20px">
        <h2>RPA文件上传</h2>
      </div> -->
      <div class="homepage_bg___20Uw_ isLoaded" style="margin: 20px">
        <canvas id="homecanvas" style="width: 100%; height: 100%;" width="849" height="400" class="isLoaded"></canvas>
        <h1>RPA文件上传</h1>
      </div>
      <upload-files></upload-files>
    </div>
  </div>
</template>

<script>
import UploadFiles from "./components/UploadFiles";
export default {
  name: "App",
  components: {
    UploadFiles
  }
};
</script>

<style>
#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:white;
  /* margin-top: 60px; */
  /* background-color: aquamarine; */
  background-image: url('~@/assets/RPA-dial-scaled.jpg');
  background-size: 100% 100%;
}
</style>
