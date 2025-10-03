import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { counterSlice } from "@/features/counter";
import { productSlice } from "@/features/product";
import { addressApi } from "@/features/address/addressSlice";
import { authSlice } from "@/features/auth/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
    [authSlice.reducerPath]: authSlice.reducer,
    [counterSlice.reducerPath]: counterSlice.reducer,
    [productSlice.reducerPath]: productSlice.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddlewares) => [
        ...getDefaultMiddlewares({
            serializableCheck: false,
        }),
        addressApi.middleware,
    ],
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

// Trick
window.store = store;

export { store, persistor };
