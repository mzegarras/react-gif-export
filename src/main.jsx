import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifAppExpertApp } from './GifAppExpertApp';
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifAppExpertApp />
  </StrictMode>,
)
