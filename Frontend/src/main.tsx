import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import "./index.css";
import { store } from "./redux/store.ts";
import router from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <Toaster richColors />
  </>
);
