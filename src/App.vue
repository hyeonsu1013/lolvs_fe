<template>
  <v-app>
    <LolvsHeader/>
    <v-main class="main">
      <div class="main-content">
        <div class="left">
        </div>
        <div class="center">
          <router-view/>
        </div>
        <div class="right">
        </div>
      </div>
    </v-main>
    <LolvsFooter/>
    <!-- <LolvsAlert
      :iconType="alertData.iconType"
      :maxWidth="alertData.maxWidth"
      :btnColorL="alertData.btnColorL"
      :btnColorR="alertData.btnColorR"
      :title="alertData.title"
      :msg="alertData.msg"
      :btnTxtL="alertData.btnTxtL"
      :btnTxtR="alertData.btnTxtR"
      @left="alertData.left"
      :leftParam="alertData.leftParam"
      @right="alertData.right"
      :rightParam="alertData.rightParam"
      ref="dunsumAlert"
    ></LolvsAlert> -->
  </v-app>
</template>

<script>
  import app from "./app";
  export default app;
</script>
