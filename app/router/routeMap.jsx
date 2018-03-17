import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers'            //container文件夹中inde.jsx页面，让着个页面当做主路由

//下边这些都是子路由
import Home from '../containers/Home'
import City from '../containers/City'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'
import Login from '../containers/Login'
import User from '../containers/User'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                	<IndexRoute component={Home}/>
                    <Route path='/city' component={City}/>
                    <Route path='/search/:type(/:keyword)' component={Search} ></Route>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='/login(/:route)' component={Login} />
                    <Route path='/user' component={User}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap
