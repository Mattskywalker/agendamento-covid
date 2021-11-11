import { lazy } from 'react'

const routes = [
    {
        path: '/',
        exact: true,
        component: lazy(() => import('./pages/home'))
    }
]

export default routes;
