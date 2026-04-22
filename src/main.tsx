import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import logo from './assets/footerlogo.webp';

// 🔥 set favicon dynamically
const existingLink = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;

const link = existingLink || document.createElement("link");
link.rel = "icon";
link.type = "image/webp";
link.href = logo;

if (!existingLink) {
  document.head.appendChild(link);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);