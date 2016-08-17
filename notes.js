class NotesApplication {
	constructor(author) {
	this.author = author
	this.notes = [];
	}
}
class notes {
	constructor(properties) {
		this.notes_id = properties.notes_id;
		this.notes_content = properties.notes_content;
		console.log("New Notes Has Been Created!!!");
}
	create(notes_content) {
		this.notes.push(notes);
	}
	listNotes(note_id, notes_content) {
		return notes_content;
	}
	 get(note_id) {
		note_id = [];
	}
	search(search_text) {
		if (search_text.find(notes) === true) { 
			return indexOf(notes);
		}
		else {
			console.log("Not Found!");
		}
	}

    delete(note_id) {
    var index = array.indexOf(notes);
if (index > -1) {
    array.splice(notes, 1);
}
	}
	 edit(note_id, new_content) {
		new_content
	}
	
	
}
var mainNotes = new NotesApplication("Dealwap");
console.log("Before", mainNotes)
mainNotes.create("First Notes", mainNotes)
