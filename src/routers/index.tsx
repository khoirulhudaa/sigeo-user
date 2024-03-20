import { lazy } from "react";

const Homepage = lazy(() => import('../pages/homepage'))
const Map = lazy(() => import('../pages/map'))

interface RouterProps {
    path: string;
    component: React.FC<{}>;
    exact: boolean;
}

const Routers: RouterProps[] = [
    {
        path: "/",
        component: Homepage,
        exact: true
    },
    {
        path: "/detail",
        component: Map,
        exact: true
    },
]

export default Routers