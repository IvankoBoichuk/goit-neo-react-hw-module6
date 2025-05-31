import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // localStorage

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['items'], // зберігаємо лише поле items
}

// Обгортаємо reducer контактів
const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer)

const rootReducer = combineReducers({
    contacts: persistedContactsReducer,
    filters: filtersReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
})

export const persistor = persistStore(store)