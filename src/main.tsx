import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const routers = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: []
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
)
