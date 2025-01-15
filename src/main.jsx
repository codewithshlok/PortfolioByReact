import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Offer from './Components/Offer/Offer.jsx'
import Certificate from './Components/Certificate/Certificate.jsx'
import Contact from './Components/Contact/Contact.jsx'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/skills",
                element: <Skills />
            },
            {
                path: "/service",
                element: <Offer />
            },
            {
                path: "/certification",
                element: <Certificate />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
])


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>,
)
