import Home from './pages/Login'
import SchedulingPage from './pages/SchedulingPage';


const routes = [
    {
        path: '/login',
        exact: true,
        component: Home,
    },
    {
        path: '/agendamento',
        exact: true,
        component: SchedulingPage,
    }
]

export default routes;
