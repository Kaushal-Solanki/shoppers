import React, { Component } from 'react'
import { connect } from 'react-redux'


class States extends Component {
  cost = () => {
    let totalCost = 0
    this.props.shopping.forEach(item => totalCost += item.cost)
    return totalCost
  }
  calories = () => {
    let totalCalories = 0
    this.props.shopping.forEach(item => totalCalories += item.calories)
    return totalCalories
  }
  weight = () => {
    let totalWeight = 0
    this.props.shopping.forEach(item => totalWeight += item.weight)
    return totalWeight
  }
  render() {

    return (
      <div className="col-md-4 states-bg">
        <h2 className="text-center">State</h2>
        <ul className="list-group">
          <li className="list-group-item">Cost - ${this.cost()}</li>
          <li className="list-group-item">calories - {this.calories()} kcal</li>
          <li className="list-group-item">weight - {this.weight()} mg</li>

        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    shopping: state.shopping
  }
}

export default connect(mapStateToProps, null)(States)