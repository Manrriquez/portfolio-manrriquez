import React from 'react';
import './index.css';
import Person from '../../assets/img/person.svg';

const SpinnerRoundedAnimation = () => {
  return (
    <section class="promo_area">
        <div class="main-title"><img src={Person} alt="" /></div>
        <div class="round-planet planet">
            <div class="round-planet planet2">
                <div class="round-planet planet3">
                </div>
                <div class="star star1"></div>
                <div class="star star2"></div>
                <div class="star star3"></div>
                <div class="star star4"></div>
                <div class="star star1 star5"></div>
                <div class="star star2 star6"></div>
                <div class="star star3 star7"></div>
                <div class="star star4 star8"></div>
            </div>
        </div>
    </section>
  )
}

export default SpinnerRoundedAnimation;