import { configureStore } from "@reduxjs/toolkit";
// created slice and stored in store file  & passed in reducer
import cartSlice from "./slice/cartSlice";

export const store = configureStore({
// passed reducer in store as it always in store keep eye on event to change state o
    reducer: {
        cart:cartSlice,
    },
});

// it will be export in use case, 
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;