class Note{
    constructor(id, description, status = false){
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

    editNote(item){
        try{
            let inputNote = document.getElementById('new-note').value;
            this.notes.find(note => note.id === item.id).description = inputNote;
            this.saveNotes();
            this.renderNotes();
        }catch (error){
            console.error('Se produjo un error', error);
        }
    }

    toggleNoteStatus(id){
        const note = this.notes.find(note => note.id === id);
        console.log(note);
        if(note){
            note.status = !note.status;
            this.saveNotes();
            this.renderNotes();
        }
    }

    saveNotes() {
        localStorage.setItem('notes', JSON.stringify(this.notes));
    }

    loadNotes(){
        this.renderNotes();
    }

    renderNotes() {
        const noteList = document.getElementById("note-list");
        noteList.innerHTML = '';
        this.notes.forEach(note => {
            const item = document.createElement('li');
            item.textContent = note.description;
            item.className = note.status ? 'importante' : '';
            const statusButton = document.createElement('button');
            statusButton.textContent = 'Cambiar Estado';
            statusButton.addEventListener('click', (e) => this.toggleNoteStatus(note.id));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation();
                this.deleteNote(note.id);
            });

            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.addEventListener('click',(e) => {
                e.stopPropagation();
                this.editNote(note);
            });

            item.appendChild(editButton);
            item.appendChild(deleteButton);
            item.appendChild(statusButton);
            noteList.appendChild(item);

        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const noteManager = new NoteManager();

    document.getElementById("add-note").addEventListener('click', (e) => {
        const newNote = document.getElementById("new-note").value;
        if(newNote){
            noteManager.addNote(newNote);
            document.getElementById('new-note').value = '';
        }
    });
});



