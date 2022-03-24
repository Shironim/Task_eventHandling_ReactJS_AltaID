import React, { Component } from 'react'
import styles from './styles.module.css';
class Card extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }
  delete(index) {
    this.props.deleteTodo(index);
  }
  changeChecked(value, index) {
    this.props.checkedChange(value, index);
  }
  render() {
    return (
      <div className={styles.card}>
        {
          this.props.listTodo.map((todo, todoIdx) => {
            return (
              <div className={styles.card_box} key={todoIdx}>
                <div className={styles.todo_list}>
                  <input
                    type="checkbox"
                    checked={todo.checked}
                    onChange={(e) => this.changeChecked(e.target.checked, todoIdx)} />
                  <div className={styles.todo}>{todo.todo}</div>
                </div>
                <button onClick={() => this.delete(todoIdx)} type='submit'>Delete</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Card;