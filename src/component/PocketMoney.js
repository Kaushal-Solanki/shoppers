import React, { Component } from 'react'
import { connect } from 'react-redux'

class PocketMoney extends Component {
  render() {
    console.log('rrrrrrrrrrrrrr', this.props.money)
    return (
      <div>
        <h2 className='text-center'>You have <span className='label label-success'>${this.props.money}</span> amount to spend Grocery Today!</h2>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    money: state.pocketMoney
  }
}

export default connect(mapStateToProps, null)(PocketMoney)
