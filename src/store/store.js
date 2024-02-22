import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import storySlice from "./storySlice";

const reducersToPersist = [""];

const persistConfig = {
  key: 'root',
  storage,
  whitelist: reducersToPersist
};

const reducers = combineReducers({
  // Your reducers
  story: storySlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  //redux-persist 사용 중에 에러가 발생해서 추가한 미들웨어
  middleware: (defaultMiddleware) =>
  defaultMiddleware({
    serializableCheck: false
  })
});

const persistor = persistStore(store);

export { store, persistor };

// // redux store
// export const store = configureStore({
//   reducer: {
//     gnb: gnbSlice,
//     gnbNum: numSlice,
//     gnbNum2: num2Slice,
//     contView: contviewSlice,
//     snb: snbSlice,
//     lnb: lnbSlice
//   }
// });

