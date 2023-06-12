import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';


const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <MantineProvider withGlobalStyles withNormalizeCSS> 
        <React.StrictMode>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                  </React.StrictMode>
        </MantineProvider>,
);

