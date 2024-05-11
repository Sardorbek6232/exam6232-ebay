import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./likeSlice";
import cartReducer from "./CartSlice";

export const store = configureStore({
    reducer: {
        likeData: likeReducer,
        cartData: cartReducer
    }
});
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;