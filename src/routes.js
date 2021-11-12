import Login from './pages/Login'
import Home from './pages/Home'
import SchedulingPage from './pages/SchedulingPage';
import Subscribe from './pages/Subscribe';


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
    },
    {
        path: '/cadastro',
        exact: true,
        component: Subscribe,
    }
]

export default routes;
