import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const nome = prompt('Digite seu nome: ');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App children={nome}></App>
  </StrictMode>,
);
