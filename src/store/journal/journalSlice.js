import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '', 
        //     body: '',
        //     date: 1234567,
        //     imageUrls: [], // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg

        // }
    },
    reducers: {
        // crear action implementar reducer, tomar el selector
        savingNewNote: ( state ) => { //cambiar el estado en issaving cuando empiece a hacer el saving si está en true el boton tiene que estar deshabiliatado
            state.isSaving = true;

        },

        addNewmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },

        stateActiveNote: ( state, action ) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: ( state, action ) => {
            state.notes = action.payload;

        },
        setSaving: ( state ) => {
            state.isSaving = true;
            state.messageSaved = '';

        },
        updateNote: ( state, action ) => { // payload: note
            state.isSaving = false;
            state.notes = state.notes.map(note => {

                if( note.id === action.payload.id ) {
                    return action.payload;
                }
                return note;

            });
            state.messageSaved = `${ action.payload.title }, actualizada correctamente`;

        },

        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
            state.isSaving = false;
        },

        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },

        deleteNoteById: ( state, action ) => {
            const deletedNoteId = action.payload;
            state.notes = state.notes.filter((note) => note.id !== deletedNoteId);
            state.active = null;
            
        },
     },

});


// Action creators are generated for each case reducer function
export const { 
    addNewmptyNote,
    clearNotesLogout,
    deleteNoteById,
    savingNewNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    stateActiveNote,
    updateNote,
 } = journalSlice.actions;