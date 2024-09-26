import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Loading from './components/Loading';
import { HelmetProvider } from 'react-helmet-async';

// import Snowfall from 'react-snowfall';

document.onkeydown = function(e) {
  if(e.keyCode == 123) {
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
    return false;
    }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    return false;
  }
  if(e.keyCode == 'f12'.charCodeAt(0)){
    return false;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <Suspense
      fallback={(<Loading open={true} />)}
    >
      
      <App />
    </Suspense>
  </HelmetProvider>
);