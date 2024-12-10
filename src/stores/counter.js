import { defineStore } from 'pinia'


 export const useCounterStore = defineStore("counter",{
    //state,
    state: () => ({
        count: 0,
        name:"Jordi",
        title:"Le gusta las castañas"
    }),
    //getter,
    getters:{
        doubleCount: (state) => state.count *2,
        multiplyFour: (state) => {return state.count *4},
        halfCount: (state) => {return state.count /2},
    },
    //actions
    actions :{
       increment(){
         return this.count++;
       },
       decrement(){
         return this.count--;

       },

    },

});
//export default useCounterStore