import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class Alert extends React.Component{
  render(){
    const { type, text } = this.props;
    const className = cn('alert', `alert-${type}`);
    return (
      <div className={className} role="alert">
        {text}
      </div>
    );
  }
}
// END
