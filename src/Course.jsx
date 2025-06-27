import PropTypes from "prop-types";
import { useState } from "react";

function Course(props) {
  const [purchased, SetPurchased] = useState("Notpurchased");
  const [price, SetPrice] = useState(props.price);
  function discount(dis) {
    SetPrice(props.price - dis);
  }
  function BuyCourse(discount) {
    console.log(props.name, "purchase with", discount, "%discount");
    SetPurchased("Purchased");
  }

  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h3>{props.name}</h3>
      <h4>{price}</h4>
      <p>{props.con}</p>
      <p>{purchased}</p>
      
      <button onClick={() => BuyCourse(20)}>BuyNow</button>
      <button onClick={() => discount(50)}>Apply discount</button>

      
    </div>
  );
}
Course.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
};

export default Course;
