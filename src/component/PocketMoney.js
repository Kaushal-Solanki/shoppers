import React, { Component } from 'react'
import { connect } from 'react-redux'

class PocketMoney extends Component {
  render() {
    return (
      <div>
        <h2 className='text-center' style={{ marginTop: "0px", paddingBottom: "22px" }}>You have <span className='label label-success'>${this.props.money}</span> amount to spend Grocery Today!</h2>
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
