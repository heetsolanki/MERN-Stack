import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cart from './Cart'
import watch1 from './watch1.jpg';
import watch2 from './watch2.jpg';
import watch3 from './watch3.webp';
import watch4 from './watch4.webp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <Cart productImage={watch1} brandName="Patek Philippe Nautilus" price="Rs. 13200000"/>
  <Cart productImage={watch2} brandName="Patek Philippe Emerald " price="Rs. 17500000"/>
  <Cart productImage={watch3} brandName="Patek Philippe Carbon" price="Rs. 17000000"/>
  <Cart productImage={watch4} brandName="Patek Philippe DiW Carbon" price="Rs. 17000000"/>
</>
);
