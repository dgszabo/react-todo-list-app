import React, { Component } from 'react';
import Todo from './Todo';
import { Redirect } from 'react-router-dom';

class TodoShow extends Component {
    goToEdit(i) {
        this.props.history.push(`/todos/${i}/edit`)  
    }
    
    render() {
        const idx = this.props.match.params.id;
        let { todo, deleteTodo, markCompleted } = this.props;
        
        if(!todo) {
            if(JSON.parse(localStorage.getItem('todos'))[idx]) {
                todo = JSON.parse(localStorage.getItem('todos'))[idx];
            } else {
                return <Redirect to="/todos" />
            }
        }

        return (
            <div className="container mt-2 mx-auto">
                <ul className="list-group text-center">
                    <Todo key={idx} title={todo.title} description={todo.description} completionStatus={todo.isCompleted} routeProps={this.props} markCompleted={markCompleted.bind(this, idx)} deleteTodo={deleteTodo.bind(this, idx)} openEditor={this.goToEdit.bind(this, idx) } />
                </ul>
            </div>
        )
    }
}

export default TodoShow;