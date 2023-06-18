<template>
  <div>
    <!-- S: 상단 메뉴바 -->
    <v-app-bar class="header_appbar" elevate-on-scroll height="80">
      <div class="contents">
        <div class="title_wrapper">
          <v-toolbar-title class="title" @click="moveRoute('/')">
            <div class="wrapper">
              <div class="focus">
                LOLVS
              </div>
              <div class="mask">
                <div class="text">LOLVS</div>
              </div>
            </div>
          </v-toolbar-title>
        </div>

        <div class="menu_wrapper color_white">
          <v-breadcrumbs :items="menuItems" large/>
        </div>
      </div>
    </v-app-bar>
    <!-- E: 상단 메뉴바 -->
  </div>
</template>

<script>

export default {
  name: "LolvsHeader",
  data () {
    return {
      menuItems : [
        {
          text: '리그별 통계',
          disabled: false,
          href: '/a',
        },
        {
          text: '선수별 통계',
          disabled: false,
          href: '/b',
        },
        {
          text: '챔피언별 통계',
          disabled: false,
          href: '/c',
        },
      ]
    }
  },
  watch: {
  },
  computed : {
  },
  methods: {
  },
  created() {
  },
}
</script>