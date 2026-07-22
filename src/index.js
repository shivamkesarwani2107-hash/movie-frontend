import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 min
      gcTime: 1000 * 60 * 10,   // 10 min
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

<QueryClientProvider client={queryClient}>
    <App />
</QueryClientProvider>

ReactDOM.createRoot(document.getElementById("root")).render(

<QueryClientProvider client={queryClient}>

<App/>

</QueryClientProvider>

); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
