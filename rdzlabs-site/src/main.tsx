import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { AppSidebar } from './components/ui/app-sidebar'
import { SidebarProvider } from './components/ui/sidebar'
import { BrowserRouter } from 'react-router-dom'
import App from './App' // <- You forgot to import App

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <AppSidebar />
        <App />
      </SidebarProvider>
    </BrowserRouter>
  </StrictMode>
)
