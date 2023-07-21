import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchTerm: string;
  genre: string;
  publicationYear: string; 
}

const initialState: SearchState = {
  searchTerm: '',
  genre: '',
  publicationYear: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setPublicationYear: (state, action: PayloadAction<string>) => {
      state.publicationYear = action.payload; 
    },
    clearFilters: (state) => {
      state.genre = '';
      state.publicationYear = ''; 
    },
  },
});

export const { setSearchTerm, setGenre, setPublicationYear, clearFilters } = searchSlice.actions;
export default searchSlice.reducer;

