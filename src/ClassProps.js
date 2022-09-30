import React from 'react'
export default class ClassProps extends React.Component{
    render(){
        return (
        <div>
            <h1>My name is {this.props.name}</h1>
        </div>
        )
    }
} 