const input = document.querySelector('[name="new-todo"]')

// memoria
class LocalStorage {
    constructor() {
        this.task = this.getAllAndLoad()
        const filter = Array.from(document.querySelector('[class="filters"]').children)
        filter.forEach((x, i) => {
            const a = x.children[0]
            a.addEventListener('click', () => {
                filter.forEach(y => y.children[0].className = "")
                if (i === 0) {
                    localStorage.setItem('filter', "all")
                    a.className = "selected"
                }
                if (i === 1) {
                    localStorage.setItem('filter', "active")
                    a.className = "selected"
                }
                if (i === 2) {
                    localStorage.setItem('filter', "completed")
                    a.className = "selected"
                }
                this.getAllAndLoad()
            })
        })
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
        this.getAllAndLoad()
    }

    getAll() {
        const t = JSON.parse(localStorage.getItem("task"))
        if (!Array.isArray(t)) {
            localStorage.setItem("task", JSON.stringify([]))
            return [];
        }
        return t;
    }

    getAllAndLoad() {
        const t = this.getAll()
        this.loadHtml(t)
    }


    update(uid = "", data) {
        const t = this.getAll()
        const index = t.findIndex(x => x.id === uid)

        if (index === -1) return;

        t[index] = {
            ...t[index],
            ...data
        }

        const li = document.querySelector(`li[task-id="${uid}"]`)
        li.className = data.done ? "completed" : ""

        localStorage.setItem("task", JSON.stringify(t))
    }
    
    delete(uid = "") {
        const t = this.getAll()
        const index = t.findIndex(x => x.id === uid)

        if (index === -1) return;

        t.splice(index, 1)

        document.querySelector(`li[task-id="${uid}"]`).remove()
        localStorage.setItem("task", JSON.stringify(t))
    }

    loadHtml(t) {
        const list = document.querySelector('.todo-list')
        list.innerHTML = ""

        const newT = t.filter(x => {
            const f = localStorage.getItem("filter")
            if (f === "all") {
                return true
            } else if (f === "active") {
                return x.done === false
            } else if (f === "completed") {
                return x.done === true
            } else {
                localStorage.setItem('filter', "all")
                return true
            }
        })
        
        newT.sort((x, y) => y.date - x.date).forEach(x => this.loadHTmlItem(x, list))
        document.querySelector('[class="todo-count"] > strong').innerHTML = `${t.length}`

       
    }
    
    loadHTmlItem(data, list) {
        const checkbox = document.createElement('input')
        checkbox.type = "checkbox"
        checkbox.classList.add('toggle')
        checkbox.setAttribute('task-id', data.id)
        checkbox.checked = data.done
        checkbox.addEventListener('change', e => {
            this.update(e.target.getAttribute('task-id'),{ done: e.target.checked })
        })

        const label = document.createElement('label')
        label.innerText = `${data.task}`
        
        const button = document.createElement('button')
        button.classList.add('destroy')
        button.setAttribute('task-id', data.id)
        button.addEventListener('click', (e) => this.delete(e.target.getAttribute('task-id')))
        
        const view = document.createElement('div')
        view.classList.add('view')
        
        const edit = document.createElement('input')
        edit.type = "text"
        edit.setAttribute('task-id', data.id)
        edit.classList.add('edit')
        edit.value = `${data.task}`
        edit.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.update(data.id, { task: edit.value})
                label.innerText = `${edit.value}`
            }
        })
        
        const li = document.createElement('li')
        label.addEventListener('dblclick', () => {
            li.classList.add('editing')
        })
        
        // load dom
        view.appendChild(checkbox)
        view.appendChild(label)
        view.appendChild(button)
        li.appendChild(view)
        li.appendChild(edit)
        li.setAttribute('task-id', data.id)
        if (data.done) li.classList.add('completed')
        list.appendChild(li)
    }

    generateUid() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
}

const s = new LocalStorage();

// input events
input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        s.addTask(input.value)
        input.value = ""
    }
})