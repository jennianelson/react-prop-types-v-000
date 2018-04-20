import React from 'react';
import PropTypes from 'prop-types';

const FLAVORS = ["chocolate", "strawberry", "vanilla", "mint chip", "peanut butter"]

class Order extends React.Component {
 
    render() {
      return (
        <div className="order">
          <ul>
            <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
            <li>{this.props.size}</li>
            <li>{this.props.scoops.length} scoops: {this.props.scoops.join(', ')}</li>
            <li>Ordered by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}.</li>
          </ul>
        </div>
      );
    }
  };

  Order.defaultProps = {
      cone: true,
      size: "regular"
  };

  //validations
  Order.propTypes = {
      cone: PropTypes.bool,
      size: PropTypes.string,
      //isRequired makes sure we can't get an order with no scoops!
      //.arrayOf() allows us to pass in the type of items in the array
      scoops: PropTypes.oneOf(FLAVORS).isRequired,
      orderInfo: PropTypes.shape({
        customerName: PropTypes.string.isRequired,
        orderedAt: PropTypes.number.isRequired
      }).isRequired
  };