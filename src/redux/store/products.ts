import { configureStore } from "@reduxjs/toolkit";
import likeReducer from '../slices/LikeSlices';
import Cart from "../../redux/slices/cartSlices";
import loginReducer from "../slices/AuthSlices"
import { api } from "../api";
const store = configureStore({
    reducer: {
        like: likeReducer,
        cart: Cart,
        login: loginReducer,
        [api.reducerPath]: api.reducer
        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
});

export {store};
