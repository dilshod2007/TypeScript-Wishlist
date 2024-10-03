import { configureStore } from "@reduxjs/toolkit";
import likeReducer from '../slices/LikeSlices';

const store = configureStore({
    reducer: {
        like: likeReducer,
    },
});

export {store};
