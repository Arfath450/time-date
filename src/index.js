import React from "react";
import ReactDom from "react-dom";
import './index.css';
import Time from './Time';
import Cdate from './Cdate';
import * as serviceWorker from './serviceWorker';
import AddToHomescreen from 'react-add-to-homescreen';

 const handleAddToHomescreenClick = () => {
  alert('Add Date & Time To Home Screen');
};

ReactDom.render(
  <>
  <div>
  <Time/>
  <Cdate/>
  </div> 
  <AddToHomescreen onAddToHomescreenClick={handleAddToHomescreenClick} />
  </>,
  document.getElementById('root')
);

serviceWorker.register();