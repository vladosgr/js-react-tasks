import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
export default class Carousel extends React.Component{
  constructor(props){
    super(props);
    this.state = {active: 0};
  }
  setActive = (direction)=>(e)=>{
    e.preventDefault();
    const {images} = this.props;
    const {active} = this.state;
    const offset = direction === 'next' ? 1 : -1;
    const next = (active + offset + images.length) % images.length;
    this.setState({active: next});
  };
  render(){
    const {images} = this.props;
    const {active} = this.state;
    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((src, index)=>(
            <div key={index} className={cn('carousel-item', { active: index === active })}>
              <img alt="" className="d-block w-100" src={src} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          data-bs-target="#carousel"
          type="button"
          data-bs-slide="prev"
          onClick={this.setActive('prev')}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-target="#carousel"
          type="button"
          data-bs-slide="next"
          onClick={this.setActive('next')}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}
// END
