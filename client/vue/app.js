let app = new Vue({
    el: '#app',
    components: {
               
                'new-todo': NewTodo,
                'edit-todo' : EditTodo,
              
    },
    data :{
      isEditing: false,
      edited : '',
      todos: [{
                title: 'Todo 0',
                project: 'Project 1',
                done: false
              }, {
                title: 'Todo 2',
                project: 'Project 2',
                done: false
              }, {
                title: 'Todo 3',
                project: 'Project 3',
                done: true
              }]
    },
    created(){
      this.getTodos()
    },
    methods: {
                newTodo (newTodo) {
                  this.todos.push(newTodo)
                },
                deleteTodo (todo) {
                  const todoIndex = this.todos.indexOf(todo)
                  this.todos.splice(todoIndex, 1)
                },
                completeTodo (todo) {
                    const todoIndex = this.todos.indexOf(todo)
                    this.todos[todoIndex].done = true
                },
                showForm (todo) {
                  this.edited = todo
                  this.isEditing = true
                  console.log(this.isEditing)
                  console.log(this.edited)
                },
                hideForm () {
                  this.isEditing = false
                  edited = ''
                },
                getTodos(){
                  console.log(localStorage.getItem("token"))
                  axios
                  .get('http://35.240.203.130/task',{
                    headers:{
                      token: localStorage.getItem("token")
                    }
                  })
                  .then(function(todos){
                    console.log(todos)
                  })
                  .catch(function(err){
                    console.log(err.message)
                  })
                }
    },        
})