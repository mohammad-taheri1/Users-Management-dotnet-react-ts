import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import AuthContextProvider from './auth/auth.context.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
);
