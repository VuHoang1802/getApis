import React, { Component } from 'react'
import './../../style/Header.css'
class Note extends Component{
    render(){
        return(
            <div className="notes">
                <span>Stories from May 23, 2019 (UTC), ordered by time on the front page</span>
                <span>	Go back a day, month, or year. Go forward a day.</span>

            </div>
        );
    }
}

export default Note