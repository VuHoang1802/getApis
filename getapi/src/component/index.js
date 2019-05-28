import React, { Component } from 'react'
import Header from './Components/Header'
import Notes from './Components/notes'
import NewFeed from './Components/newfeed'
import FooterBottom from './Components/footer'
class Main extends Component{
    render(){
        return(
            <div>
                <Header />
                <Notes />
                <NewFeed />
                <FooterBottom />
            </div>
        );
    }
}

export default Main