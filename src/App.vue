<template>
  <v-app>
    <LolvsHeader/>
    <v-main>
      <div class="main-content">
          <router-view/>
      </div>
      <LolvsFooter/>
    </v-main>
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
