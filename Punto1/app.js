class Task {
    constructor(id, description, completed = false) {
        this.id = id;
        this.description = description;
        this.completed = completed;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }
}

class TaskManager {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.loadTasks();
    }

    addTask(description) {
        const id = this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1;
        const task = new Task(id, description);
        this.tasks.push(task);
        this.saveTasks();
        this.renderTasks();
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
        this.renderTasks();
    }

    editTask(item){
        try {
            let inputTask = document.getElementById("new-task").value;
            this.tasks.find(task => task.id === item.id).description = inputTask;
            this.saveTasks();
            this.renderTasks();
        } catch (error) {
            console.error('Se produjo un error:', error);
        }  
    }

    toggleTaskComplete(id) {
        const task = this.tasks.find(task => task.id === id);
        console.log(task);
        if (task) {
           //task.toggleComplete(); //Esta línea de codigo lanza un error diciendo que la función toggleComplete no existe, por eso se implementó la línea 49. 
            task.completed = !task.completed;
            this.saveTasks();
            this.renderTasks();
        }
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    } 

    loadTasks() {
        this.renderTasks();
    }

    renderTasks() {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';
        this.tasks.forEach(task => {
            const item = document.createElement('li');
            item.textContent = task.description;
            item.className = task.completed ? 'completed' : '';
            const completeButton = document.createElement('button');
            completeButton.textContent = 'Cambiar Estado';
            completeButton.addEventListener('click', () => this.toggleTaskComplete(task.id));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation(); // Evitar que el evento se propague al elemento padre, ¿Por qué? Porque el evento click en el botón también se propaga al elemento li.
                this.deleteTask(task.id);
            });

            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.addEventListener('click', (e) => {
                e.stopPropagation();
                this.editTask(task);
            });

            item.appendChild(completeButton);
            item.appendChild(editButton);
            item.appendChild(deleteButton);
            taskList.appendChild(item);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const taskManager = new TaskManager();

    document.getElementById('add-task').addEventListener('click', () => {
        const newTask = document.getElementById('new-task').value;
        if (newTask) {
            taskManager.addTask(newTask);
            document.getElementById('new-task').value = '';
        }
    });
});