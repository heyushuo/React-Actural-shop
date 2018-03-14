import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/HomeAd/index'
import { getAdData } from '../../../fetch/home/home'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
	componentDidMount() {
		// 获取广告数据
		const result = getAdData()
		result.then(res => {
			return res.json()
		}).then(json => {
			// 处理获取的数据
				this.setState({
					data: json
				})
		}).catch(ex => {
			// 发生错误
			if (__DEV__) {
				console.error('首页广告模块获取数据报错, ', ex.message)
			}
		})
	}
    render() {
        return (
            <div>
            {
                this.state.data.length
                ? <HomeAd data={this.state.data}/>
                : <div>暂无数据</div>
            }
            </div>
        )
    }


}

export default Ad