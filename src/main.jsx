import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home'
import Post from './pages/Post'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/post/:slug',
        element: <Post />
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
