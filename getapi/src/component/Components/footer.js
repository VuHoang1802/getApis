import React, { Component } from 'react'
import './../../style/footer.css'
import { connect } from 'react-redux';
import ButtonPage from './buttonPage'
import {MoveToPage} from './../../redux/action'
class FooterBottom extends Component {
    ListPageNewStory = (index) => {
        let ArrayButton = []
        for (let i = 0; i < index; i++) {
            ArrayButton.push(<ButtonPage index={i} />)
        }

        return ArrayButton;
    }
    MoveOnPage = (isChange) =>{
        if(isChange){
            this.props.MoveToPage(isChange, this.props.startPage);
        }
        else{
            this.props.MoveToPage(isChange, this.props.startPage);
        }
    }

    render() {
        const { totalPage, startPage } = this.props;
        return (
            <div className="ButtonPage">
                <ul class="pagination">
                    <li class="page-item"><button className= "page-link" onClick={() => this.MoveOnPage(false)}>Preview</button></li>
                    {
                        this.ListPageNewStory(totalPage)
                    }
                    <li class="page-item"><button className= "page-link" onClick={() => this.MoveOnPage(true)}>Next</button></li>
                </ul>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { totalPage, startPage } = state.new;
    return {
        totalPage,
        startPage,
    }
}

const mapDispatchToProps = (dispatch, MovePage) => {
    return {
        MoveToPage: (isChange,MovePage) => MoveToPage(dispatch,isChange,MovePage)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterBottom)