import React, { Component } from 'react'
import { connect } from 'react-redux';
import ButtonPage from './buttonPage'
class FooterBottom extends Component {
    ListPageNewStory = (index) => {
        let ArrayButton = []
        for(let i = 0; i < index; i++){
            ArrayButton.push(<ButtonPage index = {i}/>)
        }

        return ArrayButton;
    }

    render() {
            const {totalPage} = this.props;
            return (
                <div className = "ButtonPage">
                    {
                        this.ListPageNewStory(totalPage)
                    }
                </div>
            );
    }
}

const mapStateToProps = (state) => {
    const {totalPage } = state.new;
    return {
        totalPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterBottom)