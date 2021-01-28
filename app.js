const app = Vue.createApp({
    methods:{
        changeBackground(event){
            document.body.style.background = event.target.id
        }
    }
})

app.mount('#app')