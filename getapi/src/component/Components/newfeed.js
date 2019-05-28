import React, { Component } from 'react'
import './../../style/newfeed.css'
import { connect } from 'react-redux';
import {fetchData} from './../../redux/action/index'
class NewFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentWillMount = () => {

    }
    convertTimeToHours(time){
        var hour = time/3600;
        time = time % 3600;
        
        var minute = Math.ceil(time / 60);
        time=time%60;
        return hour + '.' + minute + '.' + time;
    }

    renderNewList = (item, index) => {
        return (
            <div >
                <ul>
                    <li className = "" key ={item.id}>
                        <div>{index += 1}.</div> 
                        <div>
                            <div>
                                <h4>{item.title}</h4>
                            </div>
                            <div>{
                                this.convertTimeToHours(item.time)
                                }</div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
    componentDidMount = () => {
        this.props.initData()
    }
    render() {
        const { listNewId, listNewDetail } = this.props;
        console.log("listNewDetail", listNewDetail)
        return (
            <div className="NewFeed">
                {listNewDetail.map((item, index) => {
                    return this.renderNewList(item, index)
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { listNewId, listNewDetail } = state.new;
    return {
        listNewId,
        listNewDetail,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        initData: () => fetchData(dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(NewFeed)