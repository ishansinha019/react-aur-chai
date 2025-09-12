import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/Layout/Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { gitHubInfoLoader } from './components/Github/Github.jsx'
import { Route } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>S
//       },
//       {
//         path: 'about',
//         element: <About/>
//       },
//         {
//         path: 'contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])
//other method
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>         
    {/* since we have given Layout at the top level, we are able to nest our changes and keep them between the header and footer hence reusing the components */}
        <Route path='' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='user/:id' element={<User />}></Route>
        <Route 
        loader={gitHubInfoLoader}
        path='github' 
        element={<Github />}>
        </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
