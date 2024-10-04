import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
    id: number;
    quantity: number;
    price: number;
    title: string; // Add title here for easier access
}

interface IInitialState {
    cart: IProduct[];
}

const initialState: IInitialState = {
    cart: JSON.parse(localStorage.getItem('cart') || '[]'), 
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{ id: number; price: number; title: string }>) => {
            const { id, price, title } = action.payload;
            const existingProduct = state.cart.find(product => product.id === id);

            if (existingProduct) {
                existingProduct.quantity += 1; 
            } else {
                state.cart.push({ id, quantity: 1, price, title });
            }

            localStorage.setItem('cart', JSON.stringify(state.cart)); 
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const existingProduct = state.cart.find(product => product.id === action.payload);
            
            if (existingProduct) {
                if (existingProduct.quantity === 1) {
                    state.cart = state.cart.filter(product => product.id !== action.payload); // Remove product if quantity is 1
                } else {
                    existingProduct.quantity -= 1; // Decrement quantity if greater than 1
                }
            }

            localStorage.setItem('cart', JSON.stringify(state.cart)); // Update local storage
        },
        clearCart: (state) => {
            state.cart = [];
            localStorage.removeItem('cart'); // Clear local storage
        },
    },
});

// Export actions to be used in components
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;
