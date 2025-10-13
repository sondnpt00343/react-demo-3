import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import ErrorBoundary from "./components/ErrorBoundary";
import { persistor, store } from "@/store/store";
import App from "@/App";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ErrorBoundary>
        <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Suspense fallback={<div>Loading...</div>}>
                    <App />
                </Suspense>
            </PersistGate>
        </ReduxProvider>
    </ErrorBoundary>
);
