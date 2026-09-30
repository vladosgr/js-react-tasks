import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class BtnGroup extends React.Component{
  constructor(props){
    super(props);
    this.state = {active: null};
  }
  setActive = (side)=>{
    this.setState({active: side});
  };
  render(){
    const {active} = this.state;
    return(
      <div className="btn-group" role="group">
        <button
          type="button"
          className={cn('btn', 'btn-secondary', 'left', { active: active === 'left' })}
          onClick={() => this.setActive('left')}
        >
          Left
        </button>
        <button
          type="button"
          className={cn('btn', 'btn-secondary', 'right', { active: active === 'right' })}
          onClick={() => this.setActive('right')}
        >
          Right
        </button>
      </div>
    );
  }
}
// END
