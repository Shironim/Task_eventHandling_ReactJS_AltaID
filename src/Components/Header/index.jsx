import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.title)
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default Header;