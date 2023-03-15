const  { createApp } = Vue; //initialize Vue

createApp ({
    data() { 
        return {            
            pageTitle:'Vue To Do List',
            toDoList: [
                {
                    text:'prepare pancake',
                    done: true,
                },{
                    text:'take supplements with salted water',
                    done: false,
                },{
                    text:'sunlight',
                    done: false,
                },{
                    text:'do focus games',
                    done: false,
                },{
                    text:'read',
                    done: false,
                },{
                    text:'do bed',
                    done: false,
                },{
                    text:'meditate',
                    done: false,
                },{
                    text:'start working',
                    done: false,
                }
            ],
        }
    }, 
    methods: {
    
    },   
}).mount('#app');


