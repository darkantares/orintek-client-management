import App from './App';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GlobalProvider } from './context/provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);