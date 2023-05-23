import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NurseryAlertState {
  textList: string[];
  count: number;
  isVisible: boolean;
}

const initialState: NurseryAlertState = {
  textList: [],
  count: 0,
  isVisible: false,
};

const nurseryAlertSlice = createSlice({
  name: "nurseryAlert",
  initialState,
  reducers: {
    addText(state, action: PayloadAction<string>) {
      state.textList.push(action.payload);
      state.isVisible = true;
    },
    removeText(state, action: PayloadAction<number>) {
      state.textList.splice(action.payload, 1);
      if (state.textList.length === 0) {
        state.isVisible = false;
      }
    },
    setCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
    decrementCount(state) {
      state.count -= 1;
    },
    hideAlert(state) {
      state.isVisible = false;
    },
    showAlert(state) {
      state.isVisible = true;
    }
  },
});

export const { addText, removeText, setCount, decrementCount, hideAlert, showAlert } =
  nurseryAlertSlice.actions;

export default nurseryAlertSlice.reducer;
