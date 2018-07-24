let app = new Vue({
    el: '#app',
    components: {
                'new-todo': NewTodo,
                'edit-todo' : EditTodo,
    },
    data :{
      isEditing: false,
      owner:'',
      edited : '',
      todos:[],
    },
    created(){
      this.getTodos()
    },
    methods: {
                dateFormat(date){
                  let day = new Date(date).getDate()
                  let month = new Date(date).getMonth()
                  let year = new Date(date).getFullYear()
                  return `${day}/${month}/${year}`
                },
                editTodo(){
                  let id = todo._id

                    let newTag = todo.tag.reduce(function(result,tag){
                      let tags =  result + "#" + tag
                      return tags
                    }, '')
                    axios
                    .put(`http://35.240.203.130/task?id=${id}`, {
                        title: todo.title,
                        task:todo.task,
                        tag:newTag,
                        deadline: new Date(todo.deadline),
                        status: todo.status
                    }, {
                      headers:{
                        token: localStorage.getItem("token")
                      }
                    })
                    .then(function(task){
                      window.location.replace('/home.html')
                      console.log("berhasil")
                    })
                    .catch(function(err){
                      console.log(err)
                    })
                },

                newTodo (newTodo) {
                  console.log(newTodo)
                  axios
                  .post("http://35.240.203.130/task", newTodo,{
                    headers:{
                      token: localStorage.getItem("token")
                    }
                  })
                  .then(function(res){
                    window.location.replace('/home.html')
                  })
                  .catch(function(err){
                    console.log(err.message)
                  })
                },
                deleteTodo (todo) {
                  const todoIndex = this.todos.indexOf(todo)
                  this.todos.splice(todoIndex, 1)
                },

                completeTodo (todo) {
                    const todoIndex = this.todos.indexOf(todo)
                    this.todos[todoIndex].status = true
                    let id = todo._id

                    let newTag = todo.tag.reduce(function(result,tag){
                      let tags =  result + "#" + tag
                      return tags
                    }, '')
                    axios
                    .put(`http://35.240.203.130/task?id=${id}`, {
                        title: todo.title,
                        task:todo.task,
                        tag:newTag,
                        deadline: new Date(todo.deadline),
                        status: todo.status
                    }, {
                      headers:{
                        token: localStorage.getItem("token")
                      }
                    })
                    .then(function(task){
                      window.location.replace('/home.html')
                      console.log("berhasil")
                    })
                    .catch(function(err){
                      console.log(err)
                    })

                },

                showForm (todo) {
                  this.edited = todo
                  this.isEditing = true
                },
                hideForm () {
                  this.isEditing = false
                  edited = ''
                },
                getTodos(){
                  axios
                  .get('http://35.240.203.130/task',{
                    headers:{
                      token: localStorage.getItem("token")
                    }
                  })
                  .then((todos)=>{
                    this.todos = todos.data.task
                    this.owner = todos.data.task[0].userId.name
                  })
                  .catch(function(err){
                    console.log(err.message)
                  })
                },
    },        
})