import { AuthProvider } from './context/authcontext.tsx';
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider.tsx'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')!).render(
 <AuthProvider>
  <Provider>
      <BrowserRouter>
       <App/>
      </BrowserRouter>
     
    </Provider>
 </AuthProvider>
  
    
   
)
