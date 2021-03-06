import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index.js';
import {ajax} from '../../util/index';
@connect((state) => {
  return {
    cntData: state.cnt
  }
},{...actions})
export default class extends Component {
  constructor () {
    super();
    this.state = {
      userInfo:{
        avatar:'',//头像信息
        continued:null,//连续起床的天数
        getupTime:null,//起床时间
        rank:null,//我的排名
        uid:null,//我的用户ID
        userName:null//我的用户名
      }
    };
  }

  clickHandler () {

  }
  componentDidMount(){
    ajax({
      url:'http://localhost:8333/api/myinfo',
      method:'GET',

    }).then((res)=>{
     this.setState({
       userInfo:res
     });
     // debugger
    }).catch((err)=>{
      console.log(err);
    })
  }

  render () {

    return (
        <div className="page-wrap main-page" ref="mainPage">
          {this.state.userInfo.userName}
        </div>
    )
  }
}
import './index.less';
