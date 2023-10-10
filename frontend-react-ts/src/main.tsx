import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import AuthContextProvider from './auth/auth.context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
