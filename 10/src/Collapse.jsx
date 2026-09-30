import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
export default class Collapse extends React.Component{
  static defaultProps = {
    opened: true,
  };
  constructor(props){
    super(props);
    this.state = {opened: props.opened};
  }
  toggle = (e)=>{
    e.preventDefault();
    this.setState(({opened}) => ({opened: !opened}));
  };
  render(){
    const {text} = this.props;
    const {opened} = this.state;
    return(
      <div>
        <p>
          <a
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#"
            role="button"
            aria-expanded={opened}
            onClick={this.toggle}
          >
            Link with href
          </a>
        </p>
        <div className={cn('collapse', { show: opened })}>
          <div className="card card-body">{text}</div>
        </div>
      </div>
    );
  }
}
// END
