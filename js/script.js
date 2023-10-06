const { createApp } = Vue;


createApp({

  data(){

    return{

      message: "",
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
      console.log(this.listMail);
    },

  },

    mounted(){
    this.createList()
  },

  computed:{
    stampList(){
      if(this.listMail.length === 10) this.message = this.listMail.join('-')
      console.log('ciao');
    }
  }
}).mount("#app")