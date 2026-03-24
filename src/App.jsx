import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Acceuil from "./Pages/Acceuil";
import ContactPages from "./Pages/ContactPages"; 
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Conpetences from "./components/Competences";
import ConpetencesPages from "./Pages/CompetencesPages";
import Projets from "./components/Projets"
import ProjetsPages from "./Pages/ProjetsPages"
import Layout from "./Pages/Layout";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Acceuil /> },
        { path: "/contact", element: <ContactPages /> } ,

        { path: "/conpetences", element: <ConpetencesPages /> } ,

        { path: "/Projets", element: <ProjetsPages /> } 
         
        

      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;