import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Acceuil from "./Pages/Acceuil";
import ContactPages from "./Pages/ContactPages"; 
import ConpetencesPages from "./Pages/CompetencesPages";
import ProjetsPages from "./Pages/ProjetsPages";
import ProjectDetails from "./Pages/ProjectDetails"; // ✅ ajout

import About from "./Pages/About";
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
        { path: "/about", element: <About /> },

        { path: "/project/:id", element: <ProjectDetails /> }, // ✅ ici
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;