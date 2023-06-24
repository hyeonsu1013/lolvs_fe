export default {
  name: 'ScdlHome',
  data() {
      return {
        mainCalendar : {
          ref : null,
          title : '',
        },
        focus: '',
        type: 'month',
        events: [],
        colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
        names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
      }
  },
  watch: {
    'mainCalendar.ref.title': function(val) {
      let split = val.split(" ");
      if(split.length == 2) {
        this.mainCalendar.title = `${split[1]}년 ${split[0]}`;
      } else {
        this.mainCalendar.title = val;
      }
    }
  },
  methods: {
    // 일별 보기
    viewDay ({ date }) {
      this.focus = date;
      this.type = 'day';
    },
    // 월별 보기
    viewMonth() {
      this.type = 'month';
    },
    // 오늘날짜 지정
    setToday () {
      this.focus = '';
    },
    // 이벤트의 컬러 가져오기
    getEventColor (event) {
      return event.color;
    },
    // 이벤트 자세히 보기
    showEvent(event) {
      console.log('event', event);
    },
    // 이전달
    prev () {
      this.$refs.calendar.prev();
    },
    // 다음달
    next () {
      this.$refs.calendar.next();
    },
    updateRange ({ start, end }) {
      const events = []

      // 이벤트 설정하는 부분
      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        })
      }

      this.events = events;
    },
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  },
  mounted () {
    this.$refs.calendar.checkChange();
    this.mainCalendar.ref = this.$refs.calendar;
  },
  created() {
  },
}