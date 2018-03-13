import React, { Component } from 'react';
import classItems from './config';
import './App.css';

// another change
// could make a withDates to augment our cards with dates
const Card = ({ title, links, topics, isLab }) => {
  return (
    <section className='card'>
      <h3>
        { title }
        { topics.includes('HTML') && <i class="fab fa-html5"></i> }
        { topics.includes('CSS') && <i class="fab fa-css3-alt"></i> }
        { topics.includes('JS') && <i class="fab fa-js"></i> }
      </h3>
      <ul>
        { links.map(({ url, text }) => <li><a href={url} target="_blank">{text}</a></li>) }
      </ul>
    </section>
  );
};

const Nav = ({ items, selected, onSelectItem }) => {
  return (
    <nav>
      <ul>
        { items.map(({ text }, idx) => <li className={ selected === idx ? 'selected' : '' }><a onClick={ () => onSelectItem(idx) }>{ text }</a></li>) }
      </ul>
    </nav>
  )
}

const Pages = [{
  text: 'Syllabus',
  component: () => <div>{ classItems.map((props) => <Card {...props} />) }</div>
}, {
  text: 'Homework',
  component: () => <div></div>
}];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0
    };
  }

  onSelectItem = (item) => {
    this.setState({
      page: item
    })
  }

  render() {
    // navigation component - takes the page, and shows its highlighted
    // page component - not sure what props it should have
    // config (maybe a JS object) - has links that will feed the pages
    return (
      <div className='App'>
        <header>
          <h1>FEWD</h1>
          <Nav items={ Pages } selected={ this.state.page } onSelectItem={ this.onSelectItem }/>
        </header>
        <div className='content'>
          { Pages[this.state.page].component() }
        </div>
      </div>
    );
  }
}

export default App;
