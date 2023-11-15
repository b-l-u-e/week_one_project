
import React from 'react';
import icon_luxury from '../../images/icon-luxury.svg';
import icon_sedans from '../../images/icon-sedans.svg';
import icon_suvs from '../../images/icon-suvs.svg';
import './card.css';

function Card({first_item, description_one, second_item, description_two, third_item, description_three}) {
  return (
   
  <div className="cards-container">
    <div className="card card1">
        <img src={icon_sedans} alt="sedan-icon" />
        <h2>{first_item}</h2>
        <p>
        {description_one}
        </p>
        <button>Learn More</button>
    </div>
    <div className="card card2">
        <img src={icon_suvs} alt="suv-icon" />
        <h2>{second_item}</h2>
        <p>
        {description_two}
        </p>
        <button>Learn More</button>
    </div>
    <div className="card card3">
        <img src={icon_luxury} alt="luxury-icon" />
        <h2>{third_item}</h2>
        <p>
        {description_three}
        </p>
        <button>Learn More</button>
    </div>
  </div>

 );
}

export default Card;
