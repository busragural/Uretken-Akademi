import React, { Component } from 'react'

class Derece extends Component {
  render() {
    return (
      <div>
        <h4>Şu an sıcaklık: {this.props.derece} derece</h4>
      </div>
    )
  }
}
export default Derece;