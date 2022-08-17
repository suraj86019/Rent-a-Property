import React from 'react';
import './styles.css';

const ListItem = ({
  item: { coverSrc, title, ditail, price, deliveryFee, serviceTime, rating },
}) => (
  <div className='listItem-wrap'>
    <img src={coverSrc} alt='' />
    <header>
      <h4>{title}</h4>
     
      <span>🌟{rating}</span>
      
    </header>
    <h6><span>{ditail}</span></h6>
    <footer>
   
      <p>
        <b>{serviceTime}</b> <span>[ {deliveryFee} ]</span>
      </p>
      <p>
        <b>${price}/months</b>
      </p>
    </footer>
  </div>
);

export default ListItem;
