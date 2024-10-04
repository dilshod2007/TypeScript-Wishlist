import { configureStore } from "@reduxjs/toolkit";
import likeReducer from '../slices/LikeSlices';
import Cart from "../../redux/slices/cartSlices";
const store = configureStore({
    reducer: {
        like: likeReducer,
        cart: Cart

    },
});

export {store};
