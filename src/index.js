import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import RoutesApp from "./route";
import { QueryClient, QueryClientProvider } from 'react-query'
  
const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <RoutesApp />
  </QueryClientProvider>
);

reportWebVitals();
