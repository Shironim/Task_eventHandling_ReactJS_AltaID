import React, { Component } from 'react'
import styles from './styles.module.css';

class Form extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }

  changeValue(value, index) {
    this.props.stateChanged(value, index)
  }

  submitForm() {
    this.props.addToList();
  }
  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.submitForm()
      }}
        className={styles.form_container}
      >
        {
          this.props.listInput.map((input, inputIdx) => {
            return (
              <div className={styles.form_box} key={inputIdx}>
                <input className={styles.input_form}
                  type={input.inputType}
                  value={input.value}
                  placeholder="Add your task here"
                  onChange={(e) => this.changeValue(e.target.value, inputIdx)} />
              </div>
            )
          })
        }
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
export default Form