import React, { Component } from 'react'
import './../../style/footer.css'
import './../../style/Header.css'
import { connect } from 'react-redux';
import ButtonPage from './buttonPage'
import { MoveToPage } from './../../redux/action'
class FooterBottom extends Component {
    ListPageNewStory = (index) => {
        let ArrayButton = []
        for (let i = 0; i < index; i++) {
            ArrayButton.push(<ButtonPage index={i} />)
        }

        return (
            <div className = "col-md-12">
                <div className = "row">
                {
                    ArrayButton
                }
                </div>
            </div>
        );
    }
    MoveOnPage = (isChange, indexPage) => {
        if (isChange) {
            this.props.MoveToPage(isChange, indexPage + 1);
        }
        else {
            this.props.MoveToPage(isChange, indexPage - 1);
        }
    }

    render() {
        const { totalPage, indexPage } = this.props;
        return (
            <div className="ButtonPage">
                <ul class="pagination">
                    <li class="page-item"><button className="page-link" onClick={() => this.MoveOnPage(false, indexPage)}>Preview</button></li>
                    {
                        this.ListPageNewStory(totalPage)
                    }
                    <li class="page-item"><button className="page-link" onClick={() => this.MoveOnPage(true, indexPage)}>Next</button></li>
                </ul>
                <div>
                    <hr />
                    <div>
                        <div className="btnFooter">
                            <div className="btn">
                                <button>Guidelines</button>
                                <button>FAQ</button>
                                <button>API</button>
                                <button>Security</button>
                                <button>Lists</button>
                                <button>Bookmarklet</button>
                                <button>legal</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { totalPage, indexPage } = state.new;
    return {
        totalPage,
        indexPage,
    }
}

const mapDispatchToProps = (dispatch, MovePage) => {
    return {
        //MoveToPage: (isChange,MovePage) => MoveToPage(dispatch,isChange,MovePage)
        MoveToPage: (isChange, MovePage) => dispatch(MoveToPage(isChange, MovePage))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterBottom)