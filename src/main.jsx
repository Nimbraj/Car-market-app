import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './lib/Home';
import Contact from './Contact';  
import { ClerkProvider } from '@clerk/clerk-react'; 
import Index from './profile';
import AddListhing from './lib/Add-listing';

const   router = createBrowserRouter([
  {
    path: '/',  
    element: <Home/>  
  },
 
  {
    path: '/contact',  
    element: <Contact />  
  },
  {
    path:"/profile",
    element:<Index/>
  },
  {
      path:"add-Listhing",
      element: <AddListhing/>
  }
]);

const PUBLISHABLE_KEY = "pk_test_ZXF1YWwtcHVwLTM3LmNsZXJrLmFjY291bnRzLmRldiQ";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />  

    </ClerkProvider>
  </StrictMode>
);

