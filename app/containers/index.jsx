import React from 'react'
//import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore'
import CITYNAME  from '../config/localStoreKey'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        /*this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);*/
        this.state = {
            initDone: true
        }
    }
    //组件已经渲染完，dom中已经有html了
	componentDidMount() {

		// 获取位置信息
		let cityName = LocalStore.getItem(CITYNAME);
		console.log(cityName)
		if (cityName == null) {
			cityName = '北京'
		}
		this.props.userInfoActions.update({
			cityName: cityName
		})

	}
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
// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
	return {
	}
}

function mapDispatchToProps(dispatch) {
	return {
		userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
