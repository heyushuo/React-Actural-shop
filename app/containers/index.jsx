import React from 'react'
//import PureRenderMixin from 'react-addons-pure-render-mixin'
//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'
//import LocalStore from '../util/localStore'
//import { CITYNAME } from '../config/localStoreKey'
//import * as userInfoActionsFromOtherFile from '../actions/userinfo' 

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        /*this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);*/
        this.state = {
            initDone: true
        }
    }
	/*componentDidMount() {
		// 获取位置信息
		let cityName = LocalStore.getItem(CITYNAME)
		if (cityName == null) {
			cityName = '北京'
		}
		this.props.userInfoActions.update({
			cityName: cityName
		})

		// 更改状态
		this.setState({
			initDone: true
		})
	}*/
    render() {
        return (
            <div>
                {
                    this.state.initDone
                    ? this.props.children
                    : "正在加载中。。。"
				}
            </div>
        )
    }
}

export default App;
