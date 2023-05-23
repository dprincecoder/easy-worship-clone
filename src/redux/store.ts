import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

// Import your reducers here
import nurseryAlertReducer from "./nuseryAlert/nurserySlice";

export const store = configureStore({
  reducer: {
      nurseryAlert: nurseryAlertReducer,
  },
  // Other configuration options here
});

// Typing for the RootState
export type RootState = ReturnType<typeof store.getState>;

// Typing for the AppDispatch
export type AppDispatch = typeof store.dispatch;

// Typing for the AppThunk
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// Custom hooks to use with react-redux
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
