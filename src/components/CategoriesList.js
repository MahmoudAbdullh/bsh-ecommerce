import React from 'react';
import pizza from '../assets/images/icons/pizza-slice.jpg';
import hamburger from '../assets/images/icons/hamburger.jpg';
import cup from '../assets/images/icons/coffee-cup.jpg';
const CategoriesList = () => {
  return (
    <div className="categories-list-wrapper">
      <ul>
        <li className="active">
          <span>الكل</span>
        </li>
        <li>
          <img src={pizza} alt="" />
          <span>بيتزا</span>
        </li>
        <li>
          <img src={hamburger} alt="" />
          <span>سندوتشات</span>
        </li>
        <li>
          <img src={pizza} alt="" />
          <span>بيتزا</span>
        </li>
        <li>
          <img src={cup} alt="" />
          <span>مشروبات</span>
        </li>
        <li>
          <img src={pizza} alt="" />
          <span>بيتزا</span>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesList;
