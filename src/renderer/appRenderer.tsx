import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './components/Application';
import Sidebar from './components/sidebar';
// Say something
console.log('[ERWT] : Renderer execution started');

// Render application in DOM
createRoot(document.getElementById('app')).render(<>
<Application /><Sidebar /></>
);
