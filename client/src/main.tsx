  import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@/index.css'

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "@/state/api";

// we are setting up the "API REDUCER PATH " i.e  RTK Query API slice (we exported earlier)
//  middleware is the configuration we have to 
export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
// Setting up The Listners
setupListeners(store.dispatch);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
