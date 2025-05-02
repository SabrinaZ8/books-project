import { AppRoutes } from "./routes/index";
import { FavoriteProvider } from "./context/FavoriteContext/FavoriteProvider.tsx";

function App() {
  return (
    <FavoriteProvider>
      <div className="overflow-x-hidden text-neutral-800 font-lora">
        <AppRoutes />
      </div>
    </FavoriteProvider>
  );
}

export default App;
