import React from 'react'
import StudentsList from './components/StudentsList'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import SingleStudent from './components/SingleStudent'
import Root from './components/Root'

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Root />}
      >
        <Route path="studentlist" element={<StudentsList/>}/>
        <Route path="/:id" element={<SingleStudent/>}/>
        <Route />
      </Route>

    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
