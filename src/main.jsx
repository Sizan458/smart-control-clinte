import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './component/Router/Router'
import {  HelmetProvider } from 'react-helmet-async';
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './component/Hookes/AuthProvider/AuthProvider'
// Create a client
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <QueryClientProvider client={queryClient}>
 <HelmetProvider>
  <RouterProvider router={Router}/>
  </HelmetProvider>
 </QueryClientProvider>
 </AuthProvider>
  </React.StrictMode>,
)
