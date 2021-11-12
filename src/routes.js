import Login from './pages/Login'
import Home from './pages/Home'
import SchedulingPage from './pages/SchedulingPage';


const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/login',
        exact: true,
        component: Login,
    },
    {
        path: '/agendamento',
        exact: true,
        component: SchedulingPage,
    }
]

export default routes;
