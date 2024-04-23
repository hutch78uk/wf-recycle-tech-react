import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// pages
import HomePage from "./pages/HomePage";
import WfSystem from "./pages/WfSystem";
import Sustainability from './pages/Sustainability';
import OurValue from './pages/OurValue';
import News from './pages/News';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';

// layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} /> 
      <Route path="wf-system" element={<WfSystem />} /> 
      <Route path="sustainability" element={<Sustainability />} />
      <Route path="our-value" element={<OurValue />} /> 
      <Route path="about-us" element={<AboutUs />} />
      <Route path="news" element={<News />} />
      <Route path="contact-us" element={<ContactUs />} /> 
      // Catch all 404 route
      <Route path="*" element={<NotFound />}/>
    </Route>

    
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  ); 
}

export default App;