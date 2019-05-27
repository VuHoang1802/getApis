import React, { Component } from 'react'
import './../../style/Header.css'
class Header extends Component{
    timeNow = () => {
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
        const currDate = date;
        return (
          <span>{currDate}</span>
        );
    }
    render(){
        return(
            <div className="header">
                
                <div className = "btn">
                    <button>new</button>
                    <button>past</button>
                    <button>Comments</button>
                    <button>ask</button>
                    <button>show</button>
                    <button>jobs</button>
                    <button>submit</button>
                </div>
                {this.timeNow()}
            </div>
        );
    }
}

export default Header