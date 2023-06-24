<template>
  <div>
    <!-- S: 상단 메뉴바 -->
    <v-app-bar class="header_appbar bg_main_gradient" elevate-on-scroll height="80">
      <div class="contents">
        <div class="title_wrapper">
          <v-toolbar-title class="title" @click="moveRouter(mainItem)">
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
          <v-breadcrumbs :items="menuItems" large divider=" | ">
            <template v-slot:item="{ item }">
              <v-breadcrumbs-item class="click_pointer"
                :class="{active: currentMenu == item.order}"
                  @click="moveRouter(item)"
                  :disabled="item.disabled">
                {{ item.text }}
              </v-breadcrumbs-item>
            </template>
          </v-breadcrumbs>
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
      currentMenu : -1,
      mainItem : {
        domain: '/',
        order : 0,
      },
      menuItems : [
        {
          text: '일정',
          disabled: false,
          domain: '/',
          order : 0,
        },
        {
          text: '리그별 통계',
          disabled: false,
          domain: '/league',
          order : 1,
        },
        {
          text: '선수별 통계',
          disabled: false,
          domain: '/pro',
          order : 2,
        },
        {
          text: '챔피언별 통계',
          disabled: false,
          domain: '/champion',
          order : 3,
        },
      ]
    }
  },
  watch: {
  },
  computed : {
  },
  methods: {
    moveRouter(item) {
      this.currentMenu = item.order;

      this.$router.push({
          path: item.domain,
      });
    },
  },
  created() {
    // 새로고침 시 현재 메뉴 위치 파악
    let path = this.$route.path;
    this.menuItems.forEach(e => {
      if(e.domain == path){
        this.currentMenu = e.order;
      }
    });
  },
}
</script>