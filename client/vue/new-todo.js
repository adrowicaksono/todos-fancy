const NewTodo = {
    data () {
        return {
          titleText: '',
          projectText: '',
          isCreating: false
        }
      },
      template:`
                <div class="content is-centered">
                  <img src="https://png.icons8.com/nolan/96/000000/plus-2-math.png" v-on:click="openForm" v-show="!isCreating">
                <div class="new-form box" v-show="isCreating">
                    <div class="field">
                      <label class="label">Title</label>
                    <div class="control">
                        <input v-model="titleText" class="input" type="text" />
                    </div>
                    </div>
                      <div class="field">
                        <label class="label">Project</label>
                        <div class="control">
                            <input v-model="projectText" class="input" type="text" />
                        </div>
                      </div>
                    <div class="create-options">
                      <a class="button" id="createButton" v-on:click="sendForm()">Create</a>
                      <a class="button" id="cancelButton" v-on:click="closeForm">Cancel</a>
                    </div>
                </div>
                </div>
      `,
      methods: {
        openForm () {
          this.isCreating = true
        },
        closeForm () {
          this.isCreating = false
        },
        sendForm () {
          if (this.titleText.length > 0 && this.projectText.length > 0) {
            const title = this.titleText
            const project = this.projectText
            this.$emit('new-todo', {
              title,
              project,
              done: false
            })
            this.titleText = ''
            this.projectText = ''
            this.isCreating = false
          }
        }
      }
}