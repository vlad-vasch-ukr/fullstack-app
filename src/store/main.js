import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { listsApi } from '../api/lists';

export const featchLists = createAsyncThunk('lists/featchLists', async (data, thunkApi) => {
  try {
    return listsApi.getLists();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteList = createAsyncThunk('lists/deleteList', async (id, thunkApi) => {
  try {
    return listsApi.deleteListById(id);
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const mainReducer = createSlice({
  name: 'lists',
  initialState: {
    lists: [],
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(featchLists.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(featchLists.fulfilled, (state, { payload }) => {
        state.lists = payload;
        state.isLoading = false;
      })
      .addCase(featchLists.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(deleteList.fulfilled, (state, { payload }) => {
        state.lists = payload;
      });
  },
});

export const { updateValue, resetValue } = mainReducer.actions;

export default mainReducer.reducer;
