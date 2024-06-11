import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import moviesReducer from "./moviesSlice";
import authReducer from "./authSlice";
import favoritesReducer from "./favoritesSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
