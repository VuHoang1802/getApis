import React, { Component } from 'react'

var data = [{
    by: '',
    descendants: 1,
    id: 1,
    kid: [],
    score: 1,
    time: 1,
    title: '',
    type: '',
    url: ''
}
]

const initState = {
    datas: data,

}


const reducerTodo = (state = initState, action) => {
    switch (action.type) {
        case 'SHOW_LIST':
            {
                return (
                    <GetAPIs />
                );
            }

        default:
            return state
    }
}

export default reducerTodo
export class GetAPIs extends Component {
    constructor() {
        super();

        this.state = {
            hits: data,
            arrayID: []
        };
    }
    componentDidMount = () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    arrayID: json
                })

            })
            .then(
                this.state.arrayID.map((item) => {
                    var changeUrl = 'https://hacker-news.firebaseio.com/v0/item/' + item + '.json?print=pretty';
                    fetch(changeUrl)
                        .then(res => res.json())
                        .then(json => {
                            this.setState({
                                hits: json
                            })

                        })

                    data.push(this.state.hits);

                })
            )

    }
    render() {
        console.log(data);
        return (
            <div>{
                data.map((item) => {
                    return (
                        <li>{item.title}</li>
                    );
                })
            }
            </div>
        );
    }
}