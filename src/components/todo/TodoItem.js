import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {v4 as uuidv4} from 'uuid'; // to generate unique ids for all todos


export class TodoItem extends Component {
    state = {
        notes: [] //keep all the notes you have
    }
    // dynamic styling
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    addNote = (note) => {
        const newNote = {
            id: uuidv4(),
            note: note
        }
        this.setState({notes: [...this.state.notes, newNote]})
    }

    render() {
        // destructuring ~ so we don't need to do this.props everytime
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {''}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
             </div>
             
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}


const btnStyle = {
    background: '#4dc8e9',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%', // rounded
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
