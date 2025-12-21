import App from './App.tsx'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { theme } from './theme.ts';
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById('root')!).render(
<MantineProvider theme={theme}>
    <StrictMode>
      <App />
    </StrictMode>
</MantineProvider>
)
