import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Acceuil from "./Pages/Acceuil";
import ContactPages from "./Pages/ContactPages"; 
import ConpetencesPages from "./Pages/CompetencesPages";
import ProjetsPages from "./Pages/ProjetsPages";
import About from "./Pages/About"; // <-- ajout About

import Layout from "./Pages/Layout";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Acceuil /> },
        { path: "/contact", element: <ContactPages /> },
        { path: "/conpetences", element: <ConpetencesPages /> },
        { path: "/projets", element: <ProjetsPages /> },
        { path: "/about", element: <About /> }, // <-- route About
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;