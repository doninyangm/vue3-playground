import { createApp } from 'vue/dist/vue.esm-browser.js';
//yarn vite
const Num = {
  props:{
    number: {
      type: Number,
      required: true
    }
  },
  template: `
    <button :class="getClass(number)" @click="handleClick">
      {{ number }}
    </button>
    `,
  methods: {
    handleClick() {
      this.$emit('chosen', { number: this.number });
    },
    getClass(number){
      return (this.isEven(number)) ? 'red' : 'blue';
    },
    isEven(number){
      var iseven = (number % 2 == 0) ? true : false;
      return iseven;
    }
  }
}

const app = createApp({
  components:{
    Num
  },
  template: `
    <num v-for="number in  numbers" :number="number" @chosen="putInArray"/>
    <h3>Clicked numbers</h3>
    <num v-for="number in  clickedNumbers" :number="number"/>
  `,
  data(){
    return{
      numbers: [1,2,3,4,5,6,7,8,9,10],
      clickedNumbers: []
    }
  },
  methods:{
    putInArray(payload){
      this.clickedNumbers.push(payload.number);
    }
  }
}).mount('#app')
