import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import "./assets/segoe/style.scss"
import './index.scss'
import {AppRouter} from './router'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
   <RouterProvider router={AppRouter}/>
  // </StrictMode>,
)
