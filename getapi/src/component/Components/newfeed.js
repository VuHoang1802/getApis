import React, { Component } from 'react'
import './../../style/newfeed.css'
import { connect } from 'react-redux';
import { fetchData } from './../../redux/action/index'

class NewFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentWillMount = () => {

    }
    convertTimeToHours(time) {
        var hour = time / 3600;
        time = time % 3600;

        var minute = Math.ceil(time / 60);
        time = time % 60;
        return hour + '.' + minute + '.' + time;
    }

    renderNewList = (item, index) => {
        return (
            <div >
                <ul>
                    <li className="SomeNew" key={item.id}>
                        <a href={item.url}>
                            <div><b>{index += 1}.</b></div>
                            <div>
                                <div>
                                    <h5>{item.title}</h5>
                                </div>
                                <div>{
                                    this.convertTimeToHours(item.time)
                                }</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
    componentDidMount = () => {
        this.props.initData();
    }
    render() {
        const { listNewId, listNewDetail, startPage } = this.props;
        console.log(listNewDetail);
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
    const { listNewId, listNewDetail, startPage } = state.new;
    return {
        listNewId,
        listNewDetail,
        startPage,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        initData: () => dispatch(fetchData())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(NewFeed)