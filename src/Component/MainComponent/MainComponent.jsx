import React from 'react';
import Header from  '../Header/Header';
import Banner from '../Banner/Banner';
import Content from '../Content/Content';

class MainComponent extends React.Component {
  render() {
	  
    return (
      <section>
          <Header/>
          <Banner/>
          <Content/>
      </section>
    );
  }
}

export default MainComponent;

