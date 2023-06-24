<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet class="bg_transparent" height="64">
        <v-toolbar flat class="lv_toolbar top_radius20 bg_main_gradient">
          <v-btn outlined class="mr-4" color="white" @click="setToday">오늘</v-btn>
          <v-btn fab text small color="white" @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small color="white" @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-toolbar-title class="ml20" v-if="$refs.calendar">
            {{ mainCalendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn v-if='type == "day"' class="mr-4 fc_white" color="teal darken-1" @click="viewMonth">월별</v-btn>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar class="lv_calendar"
          ref="calendar" v-model="focus" color="primary"
          :locale="'ko-KR'" :event-more-text='"더보기"'
          :events="events" :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
  import ScdlHome from "@/views/home/scdlHome";
  export default ScdlHome;
</script>