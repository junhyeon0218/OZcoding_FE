import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // 로컬 스토리지를 사용
import moviesReducer from "./moviesSlice"; // 예시로 moviesReducer를 사용

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  movies: moviesReducer,
  // 다른 리듀서들도 여기에 추가
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
