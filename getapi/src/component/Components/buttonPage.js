import React, { Component } from 'react'
import { connect } from 'react-redux';
import { LoadPage } from './../../redux/action/'
class ButtonPage extends Component {
    ReLoadPage = () => {
        this.props.LoadPage(this.props.index);
    }
    render() {
        return (
            <div>
                <li class="page-item"><button className= "page-link" onClick={() => this.ReLoadPage()}>{this.props.index}</button></li>
            </div>
        );
    }
}
const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
    // return {
    //     LoadPage: (index) => LoadPage(dispatch,index)
    // }

    return {
        LoadPage: (index) => dispatch(LoadPage(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonPage)