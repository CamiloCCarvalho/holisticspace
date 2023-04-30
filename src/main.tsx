// imports
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// routes
import HomePage from './routes/Home'

// routes-outlet-component
const routers = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        path:'/',
        element: <HomePage />
      },
      {
        path:'/sobre',
        element: <p>text</p>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={routers} />
)
