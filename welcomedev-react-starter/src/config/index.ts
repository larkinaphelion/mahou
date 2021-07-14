// icons
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/BarChartOutlined';
import StockIcon from '@material-ui/icons/Widgets';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import MotoIcon from '@material-ui/icons/Motorcycle';
import InProgressIcon from '@material-ui/icons/Build';
import DoneIcon from '@material-ui/icons/AssignmentTurnedIn';

// components
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import InProgress from '../pages/Motos/InProgress';
import Done from '../pages/Motos/Done';
import Stock from '../pages/Stock';
import Settings from '../pages/Settings';

// interface
import RouteItem from '../model/RouteItem.model';

// define app routes
export const routes: Array<RouteItem> = [
    {
        key: "router-home",
        title: "Home",
        tooltip: "Home",
        path: "/",
        enabled: true,
        component: Home,
        icon: HomeIcon,
        appendDivider: true
    },
    {
        key: "router-dashboard",
        title: "Dashboard",
        tooltip: "Dashboard",
        path: "/dashboard",
        enabled: true,
        component: Dashboard,
        icon: DashboardIcon
    },
    {
        key: "router-gh",
        title: "Motos",
        tooltip: "Motos",
        enabled: true,
        icon: MotoIcon,
        subRoutes: [
            {
                key: "router-in-progress",
                title: "En Progreso",
                tooltip: "En Progreso",
                path: "/motos/progress",
                enabled: true,
                component: InProgress,
                icon: InProgressIcon
            }
            , {
                key: "router-done",
                title: "Terminadas",
                tooltip: "Terminadas",
                path: "/motos/done",
                enabled: true,
                component: Done,
                icon: DoneIcon
            }
        ]
    },
    {
        key: "router-stock",
        title: "Stock",
        tooltip: "Stock",
        path: "/stock",
        enabled: true,
        component: Stock,
        icon: StockIcon,
        appendDivider: true
    },
    {
        key: "router-settings",
        title: "Settings",
        tooltip: "Settings",
        path: "/settings",
        enabled: true,
        component: Settings,
        icon: SettingsIcon
    },
]