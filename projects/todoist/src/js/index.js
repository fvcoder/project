const input = document.querySelector('[name="new-todo"]')

// memoria
class LocalStorage {
    items = []

    constructor() {
        this.task = this.getAll()
    }
    

    addTask(taskName) {
        if (taskName === "") return;
        const task = this.getAll()
        task.push({
            id: this.generateUid(),
            done: false,
            task: taskName,
            date: new Date().getTime()
        })
        localStorage.setItem("task", JSON.stringify(task))
        this.getAll()
    }

    getAll() {
        const t = JSON.parse(localStorage.getItem("task"))
        if (!Array.isArray(t)) {
            localStorage.setItem("task", JSON.stringify([]))
            return [];
        }
        const list = document.querySelector('.todo-list')
        list.innerHTML = ""
        t.sort((x, y) => y.date - x.date).forEach(x => this.loadItem(x, list))
        return t;
    }
    
    loadItem(data, list) {

        const checkbox = document.createElement('input')
        checkbox.type = "checkbox"
        checkbox.classList.add('toggle')
        checkbox.setAttribute('task-id', data.id)

        const label = document.createElement('label')
        label.innerText = `${data.task}`

        const button = document.createElement('button')
        button.classList.add('destroy')
        button.setAttribute('task-id', data.id)

        const view = document.createElement('div')
        view.classList.add('view')
        
        const edit = document.createElement('input')
        edit.setAttribute('task-id', data.id)
        edit.classList.add('edit')
        
        const li = document.createElement('li')
    
        // load dom
        view.appendChild(checkbox)
        view.appendChild(label)
        view.appendChild(button)
        li.appendChild(view)
        li.appendChild(edit)
        list.appendChild(li)
    }

    generateUid() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
}

const s = new LocalStorage();

// load init


// input events
input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        s.addTask(input.value)
        input.value = ""
    }
})