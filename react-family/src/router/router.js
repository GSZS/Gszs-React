import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

// 路由路径
import RouterPath from './Router-path/routerPath'

// 路由表
import RouterTable from './Router-table/routerTable'

const getRouter = () => (
    <Router>
        <div>
            <RouterPath/>
            <RouterTable/>
        </div>
    </Router>
);

export default getRouter;