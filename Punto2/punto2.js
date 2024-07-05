class Note{
    constructor(id, description, status = "IMPORTANTE"){
        this.id = id;
        this.description = description;
        this.status = status;
    }

    toggleComplete(){
        this.status = !this.status;
    }
}


class NoteManager{
    constructor(){
        this.notes = JSON.parse(localStorage.getItem('notes')) || [];
        this.loadNotes();
    }

    addNote(description){
        const id = this.notes.length ? this.notes[this.notes.length - 1 ].id + 1 : 1;
        const note = new Note(id,description);
        this.notes.push(note);
        this.saveNotes();
        this.renderNotes();
    }

    deleteNote(id){
        this.notes = this.notes.filter(note => note.id != id);
        this.saveNotes();
        this.renderNotes();
    }

    saveNotes() {
        localStorage.setItem('notes', JSON.stringify(this.notes));
    }

    renderNotes() {
        const noteList = document.getElementById("note-list");
        noteList.innerHTML = '';
        this.notes.forEach(note => {
            const item = document.createElement('li');
            item.textContent = note.description;
            item.className = note.status ? 'IMPORTANTE' : '';

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation();
                this.deleteNote(note.id);
            });

            item.appendChild('deleteButton');
            taskList.appendChild(item);
        })
    }
}



