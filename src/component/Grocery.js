import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGrocery, removePocketMonye } from '../action'


class Grocery extends Component {
  render() {
    return (
      <div className="col-md-4 grocery-bg">
        <h2 className="text-center">Grocery Items</h2>
        <ul className="list-group">
          {this.props.grocery.map((item) => {
            return <li className="list-group-item" key={item.id}
              onClick={() => {
                this.props.removePocketMonye(item.id)
                this.props.addGrocery(item.id)
              }
              }>

              <b>{item.name}</b>-
              <span className="label label-info">{item.cost}</span>-
              <span className="label label-warning">{item.calories}</span>-
              <span className="label label-primary">{item.weight}</span>
            </li>
          })}


        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    grocery: state.grocery
  }
}

export default connect(mapStateToProps, { addGrocery, removePocketMonye })(Grocery)