import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeGrocery } from '../action'

class Shopping extends Component {

  displayItem() {
    if (this.props.shopping.length > 0) {
      return (<ul className="list-group">
        {this.props.shopping.map((item) => {
          return <li className="list-group-item" key={item.id} onClick={() => this.props.removeGrocery(item.id)}>

            <b>{item.name}</b>-
            <span className="label label-info">{item.cost}</span>-
            <span className="label label-warning">{item.calories}</span>-
            <span className="label label-primary">{item.weight}</span>
          </li>
        })}

      </ul>)
    } else {
      return (

        <ul className="list-group">

          <li className="list-group-item">Please Add Some Items.....</li>
        </ul>)
    }
  }


  render() {
    return (
      <div className="col-md-3 shopping-bg">
        <h2 className="text-center">Shopping</h2>
        {this.displayItem()}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    shopping: state.shopping
  }
}

export default connect(mapStateToProps, { removeGrocery })(Shopping)