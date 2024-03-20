import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Routers from "./routers";
import store, { persistor } from "./redux/store.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Suspense fallback={'Loading'}>
                        <Routes>
                            {Routers.map((router: any, index: number) => (
                                <Route
                                    key={index}
                                    path={router.path}
                                    element={<router.component />}
                                />
                            ))}
                        </Routes>
                    </Suspense>
                </Router>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
