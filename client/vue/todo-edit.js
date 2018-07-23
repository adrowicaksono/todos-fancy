const EditTodo = {
    props : ['todo'],
   
    template:`
            <div class="modal is-active">
               <div class="modal-background" @click="hideForm"></div>
                    <div class="modal-content">
                        <div class="box">
                                <div class="edit-form box">
                                    <div class="form">
                                        <div class="field">
                                        <label class="label">Title</label>
                                        <div class="control">
                                            <input class="input" type="text" v-model="todo.title" />
                                        </div>
                                        </div>
                                        <div class="field">
                                        <label class="label">Project</label>
                                        <div class="control">
                                            <input class="input" type="text" v-model="todo.project" />
                                        </div>
                                        </div>
                                        <div class="close">
                                        <a class="button is-small" v-on:click="saveChange">Save</a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <button class="modal-close" @click="hideForm"></button> 
                </div>
            </div>`,
    methods: {
        hideForm(){
            this.$emit('hide-form')
        },
        saveChange(){
            console.log(this.todo)
            console.log(this.todo.title)
            this.$emit('hide-form')
        }
       
    }
}