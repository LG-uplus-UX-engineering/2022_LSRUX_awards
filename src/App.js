import './default/swiper.css';
import './default/default.css';
import './ui_22.css';
import './ui_result_22.css';
import React, { Fragment } from 'react';
import { Header, Banner, ResultPopup } from './Banner';
import { Block1, Block2, Block3, Block4, Block5, Block6, Block7 } from './Contents';
import {swiperEffect, scrollEffect, contentEffect, changeDescription, preventScroll} from './effect';

class App extends React.Component {
  componentDidMount() {
    swiperEffect();
    scrollEffect();
    contentEffect();
    changeDescription();
    preventScroll();
  }

  render () {
    return (
      <Fragment>
          <ResultPopup />
          <div className="total_wrapper">
            <Header />
            <article className="default">
                <Banner />
                <Block1 />
                <Block2 />
                <Block3 />
                <Block4 />
                <Block5 />
                <Block6 />
            </article>
            <Block7 />
          </div>
      </Fragment>
    );
  }
}

export default App;
