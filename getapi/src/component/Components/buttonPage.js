import React, { Component } from 'react'
import { connect } from 'react-redux';
import {LoadPage} from './../../redux/action/'
class ButtonPage extends Component {
    ReLoadPage = () => {
        this.props.LoadPage(this.props.index);
    }
    render() {
        
        return (
            <div>
                <button onClick = {() => this.ReLoadPage()}>{this.props.index}</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        LoadPage: (index) => {
            dispatch(LoadPage(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonPage)