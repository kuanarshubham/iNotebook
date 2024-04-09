import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {

  const route = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path:'/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    }
  ])

  return (
    <>
      <NoteState>
        <RouterProvider router={route} />
      </NoteState>
    </>
  );
}

export default App;
