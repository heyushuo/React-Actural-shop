import React from 'react'
import ReactDom from 'react-dom'
import { hashHistory } from 'react-router'

// 通用样式
import './static/css/common.less'

import RouteMap from './router/routeMap'
ReactDom.render(
    <RouteMap  history={hashHistory}/>,
    document.getElementById('root')
)
