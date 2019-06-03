import React, { Component } from 'react'
import './../../style/Header.css'

import { connect } from 'react-redux';
import {pastList} from './../../redux/action/index'
class Header extends Component{
    timeNow = () => {
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
        const currDate = date;
        return (
          <span>{currDate}</span>
        );
    }
    pastList = (url) =>{
        this.props.initData(url);
    }

    render(){
        return(
            <div className="header">
                
                <div className = "btn">
                    <button onClick = {() => this.pastList('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')}>new</button>
                    <button onClick = {() => this.pastList('https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty')}>past</button>
                    <button>Comments</button>
                    <button>ask</button>
                    <button>show</button>
                    <button>jobs</button>
                    <button>submit</button>
                </div>
                {this.timeNow()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {

}


const mapDispatchToProps = (dispatch) => {
    return {
        initData: (url) => dispatch(pastList(url))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header)