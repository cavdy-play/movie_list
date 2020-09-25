import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const routes = [
    {
        id: 1,
        name: 'home',
        path: '/',
        exact: true,
        component: Home
    },
    {
        id: 2,
        name: 'not found',
        path: '*',
        exact: true,
        component: NotFound
    }
]

export default routes;
