import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home'

import ListCompoent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        /*this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }*/
        this.state={
            data:[],
            page:0,
            hasMore:false,
            isLoadingMore:false
        }
    }
	componentDidMount(){
        this.loadFirsfData()
	}
	/*componentWillReceiveProps(nextProps){
		console.log(nextProps.cityName)
		//一定要在这里qu执行函数，不然获取不到父组件的值
		this.loadFirsfData(nextProps.cityName)
	}*/
        //获取首屏数据
    loadFirsfData(){
    	const cityName=this.props.cityName;
		const result=getListData(cityName,this.state.page)
        this.resultHandle(result)
    }
    //加载跟多
	loadMoreFn(){
        this.setState({
            isLoadingMore:true,
			page:this.state.page+1
        })
		const cityName=this.props.cityName;
        const page=this.state.page;

		const result=getListData(cityName,page)
		this.resultHandle(result)
    }
    //统一来处理返回结果的函数
	resultHandle(result){
		result.then(res=>{
                return res.json()
            }).then(json=>{

                this.setState({
					// 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
                    data:this.state.data.concat(json.data),
                    hasMore:json.hasMore,
                    isLoadingMore:false,
                })
            }).catch(err=>{
                alert("error")
            })
    }
    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢{this.props.cityName}</h2>
                {
                    this.state.data.length
                    ?<ListCompoent data={this.state.data} />
                    :<div>加载中。。。</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreFn.bind(this)}  ></LoadMore>
                    : ""
                }

            </div>
        )
    }
}

export default List