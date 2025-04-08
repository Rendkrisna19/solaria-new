import './App.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RouteApp from './router/route';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    AOS.init({
      once: true,        
      duration: 800,    
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RouteApp />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
