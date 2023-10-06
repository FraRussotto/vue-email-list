const { createApp } = Vue;


createApp({

  data(){

    return{

      mail: "",
      listMail: [],
      apiMail: "https://flynn.boolean.careers/exercises/api/random/mail",
    }
  },


  methods: {
    createList(){
      for(let i = 0; i < 10; i++){
        axios.get(this.apiMail)
        .then ((email) => {
          this.listMail.push(email.data.response)
        })
      }
    },

  },

    mounted(){
    this.createList()
  },

  computed:{
    stampList(){
      if(this.listMail.length === 10){
        return this.mail = this.listMail.join(' - ')
      }
    }
  }
}).mount("#app")