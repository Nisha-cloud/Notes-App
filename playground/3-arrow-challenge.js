const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },
    {
        text : 'Cleaning yard',
    completed : false
    },
    {
        text: 'Film Course',
        completed: false
    }

    ],
    getTasksToDo(){
        const getTasksToDo = this.tasks.filter((task) => {
            return task.completed === false

        })
        return getTasksToDo

    }

    

}
console.log(tasks.getTasksToDo())

