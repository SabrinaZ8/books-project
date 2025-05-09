import { AppRoutes } from "./routes/index";
import { FavoriteProvider } from "./context/FavoriteContext/FavoriteProvider.tsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <FavoriteProvider>
      <div className="overflow-x-hidden text-neutral-800 font-lora">
        <AppRoutes />
        <ToastContainer />
      </div>
    </FavoriteProvider>
  );
}

export default App;
