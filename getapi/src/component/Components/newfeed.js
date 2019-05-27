import React, { Component } from 'react'
import './../../style/newfeed.css'
import { connect } from 'react-redux';
import {showNewFeed} from './../../redux/action'
import {GetAPIs} from './../../redux/reducers/reducerList'

class NewFeed extends Component {

    render() {
        //const data = this.props.data;
        return (
            <div className="NewFeed">
                <ul>
                    {
                        <GetAPIs />
                        
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    const data = state.todo;
    return {
        data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showNewFeed: () => {
            dispatch(showNewFeed())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewFeed)