import { Toaster } from 'react-hot-toast';
import GlobalRouter from './routes';

const App = () => {
  return (
    <div>
      <GlobalRouter />
      <Toaster />
    </div>
  );
};

export default App;
