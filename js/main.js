const  { createApp } = Vue; //initialize Vue

createApp ({
    data() { 
        return {            
            pageTitle:'Vue To Do List',
            index: 0,
            newItem: {
                text: '',
                done: false,
              },
            toDoList: [
                {
                    text:'prepare pancake',
                    done: false,
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
        removeListItem(index){
            this.toDoList.splice(index, 1);
        },
        addListItem(){
            if(this.newItem.text.trim() != '')  {
                this.toDoList.push(this.newItem);
                this.newItem = {text: '',done: false,}
            }
        },
        changeDone(index){
            this.toDoList[index].done = !this.toDoList[index].done;
        }
    },   
}).mount('#app');


