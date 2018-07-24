import {Login,Home} from '../components'

const routes = [
    {path:"/login", needAuth: false, roles:[], component:Login},
    {path:"/", needAuth: true, roles:["ROLE_ADMIN"], component:Home}
];

export {routes}