<template>
  <article id="calendar">
    <header class="mb-3">
      <div class="current-date">
        <div class="today">
          <div><div class="arrow arrow-up" @click="dateUp()"></div></div>
          <div><div class="arrow arrow-up" @click="monthUp()"></div></div>
          <div><div class="arrow arrow-up" @click="currentDate.year += 1"></div></div>
          <div>{{ currentDate.date }}</div>
          <div>{{ month[currentDate.month] }}</div>
          <div>{{ currentDate.year }}</div>
          <div><div class="arrow arrow-down" @click="dateDown()"></div></div>
          <div><div class="arrow arrow-down" @click="monthDown()"></div></div>
          <div><div class="arrow arrow-down" @click="currentDate.year -= 1"></div></div>
        </div>
      </div>
    </header>
    <section>
      <div class="weekdays bg-dark">
        <div class="weekday" v-for="(weekday, index) in weekdays" :key="index">
          {{ weekday }}
        </div>
      </div>
      <div class="date bg-secondary">
        <div class="day-hidden" v-for="(n, index) in (firstMonthDay -1)" :key="'prev'+index">
          {{ (prevMonthDays +1) - firstMonthDay + n }}
        </div>
        <div class="day"
            :class="{ active: n === currentDate.date}"
            @click="setCurrentDate(n)"
            v-for="(n, index) in currentMonthDays"
            :key="'day'+index">
          {{ n }}
        </div>
        <div class="day-hidden" v-for="(n, index) in (43 - (currentMonthDays + firstMonthDay))" :key="'next'+index">
          {{ n }}
        </div>
      </div>
    </section>
  </article>
</template>

<script>
  export default {
    data: function() {
      return {
        weekdays: ['Mo','Tu','We','Th','Fr','Sa','Su'],
        weekdayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        month: [
          'January','February','March','April','May','June','July',
          'August','September','October','November','December'
        ],
        currentDate: {
          date: 0,
          month: 0,
          year: 0
        }
      }
    },
    computed: {
      prevMonthDays() {
        let year = this.currentDate.month === 0 ? this.currentDate.year - 1 : this.currentDate.year
        let month = this.currentDate.month === 0 ? 12 : this.currentDate.month
        return new Date(year, month, 0).getDate()
      },
      firstMonthDay() {
        let firstDay = new Date(this.currentDate.year, this.currentDate.month, 1).getDay()
        if(firstDay === 0) firstDay = 7
        return firstDay
      },
      currentDay() {
        let cDay = new Date(this.currentDate.year, this.currentDate.month, this.currentDate.date).getDay()
        return cDay
      },
      currentMonthDays() {
        return new Date(this.currentDate.year, this.currentDate.month +1, 0).getDate()
      }
    },
    methods: {
      getCurrentDate() {
        let today = new Date()
        this.currentDate.date = today.getDate()
        this.currentDate.month = today.getMonth()
        this.currentDate.year = today.getFullYear()
      },
      dateUp() {
        if(this.currentDate.date === this.currentMonthDays) {
          this.currentDate.date = 1
          this.monthUp()
        }
        else {
          this.currentDate.date += 1
        }
      },
      dateDown() {
        if(this.currentDate.date === 1) {
          this.currentDate.date = this.prevMonthDays
          this.monthDown()
        }
        else {
          this.currentDate.date -= 1
        }
      },
      monthUp() {
        if(this.currentDate.month === 11) {
          this.currentDate.month = 0
          this.currentDate.year += 1
        }
        else {
          this.currentDate.month += 1
        }
      },
      monthDown() {
        if(this.currentDate.month === 0) {
          this.currentDate.month = 11
          this.currentDate.year -= 1
        }
        else {
          this.currentDate.month -= 1
        }
      },
      setCurrentDate(data) {
        this.currentDate.date = data
        this.$store.dispatch('addDayToReservation', this.currentDate)
      }
    },
    created() {
      this.getCurrentDate()
    }
  }
</script>

<style lang="css" scoped>
 #calendar {
	 width: 460px;
	 border-radius: 15px;
	 overflow: hidden;
	 background-size: cover;
	 user-select: none;
   margin: 0 auto;
}
 #calendar header {
	 display: flex;
	 justify-content: center;
	 align-items: top;
	 text-align: center;
	 overflow: hidden;
}
 #calendar header .current-date {
	 width: 300px;
}
 #calendar header .arrow-up {
	 width: 0;
	 height: 0;
	 border-left: 10px solid transparent;
	 border-right: 10px solid transparent;
	 cursor: pointer;
	 border-bottom: 10px solid #000;
   transition: 0.3s;
}
 #calendar header .arrow-up:hover {
	 border-bottom: 10px solid rgba(0, 0, 0, .4);
}
 #calendar header .arrow-down {
	 width: 0;
	 height: 0;
	 border-left: 10px solid transparent;
	 border-right: 10px solid transparent;
	 cursor: pointer;
	 border-top: 10px solid #000;
   transition: 0.3s;
}
 #calendar header .arrow-down:hover {
	 border-top: 10px solid rgba(0, 0, 0, .4);
}
 #calendar header .today {
	 display: grid;
	 grid-template-columns: 40px auto 70px;
	 grid-gap: 0;
}
 #calendar header .today div {
	 display: flex;
	 justify-content: center;
}
 #calendar header .current-day {
	 font-size: 4rem;
}
 #calendar header .today {
	 font-size: 2rem;
}
 #calendar .weekdays {
	 display: grid;
	 grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
	 grid-gap: 10px;
	 padding: 5px 10px 5px;
	 background-color: rgba(0, 0, 0, .5);
	 border-bottom: 1px solid #fff;
}
 #calendar .weekdays div {
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 height: 30px;
	 color: #fff;
	 border-radius: 5px;
}
 #calendar .weekdays div:nth-child(7n) {
	 color: #d43541;
}
 #calendar .date {
	 display: grid;
	 grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
	 grid-gap: 10px;
	 padding: 5px 10px 5px;
	 background-color: rgba(0, 0, 0, .7);
}
 #calendar .date div {
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 color: #fff;
	 border-radius: 5px;
}
 #calendar .date .active {
	 background-color: #fff;
	 color: #2a4c50;
}
 #calendar .date .day {
	 cursor: pointer;
   transition: 0.3s;
}
 #calendar .date .day:hover {
	 background-color: #fff;
	 color: #2a4c50;
}
 #calendar .date .day:nth-child(7n) {
	 color: #d43541;
}
 #calendar .date .day:nth-child(7n):hover {
	 background-color: #fff;
	 color: #d43541;
}
 #calendar .date .day-hidden {
	 opacity: 0.4;
}
 #calendar .date .day-hidden:nth-child(7n) {
	 color: #d43541;
}
</style>
