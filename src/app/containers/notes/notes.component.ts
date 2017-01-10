import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services';
import { Store } from '../../store';
import 'rxjs/Rx';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  notes = []
  constructor(
    private store: Store,
    private noteService: NoteService
  ) {
    this.noteService.getNotes()
      .subscribe();

    this.store.changes.pluck('notes')
      .subscribe((notes: any) => this.notes = notes);
  }

  onCreateNote(note) {
    this.noteService.createNote(note)
      .subscribe();
  }

  onNoteChecked(note) {
    this.noteService.completeNote(note)
      .subscribe();
  }
}
