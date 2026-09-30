import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
export default class Component extends React.Component {
  constructor(props){
    super(props);
    this.state = {log: []};
  }
  add = (delta)=>{
    const {log} = this.state;
    const current = get(log, '[0].value', 0);
    const item = { id: uniqueId(), value: current + delta };
    this.setState({log: [item, ...log]});
  };
  remove = (id)=>{
    this.setState(({log}) => ({log: log.filter((item) => item.id !== id)}));
  };
  render(){
    const {log} = this.state;
    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button type="button" className="btn btn-outline-success" onClick={() => this.add(1)}>+</button>
          <button type="button" className="btn btn-outline-danger" onClick={() => this.add(-1)}>-</button>
        </div>
        {log.length > 0 && (
          <div className="list-group">
            {log.map(({ id, value }) => (
              <button
                key={id}
                type="button"
                className="list-group-item list-group-item-action"
                onClick={() => this.remove(id)}
              >
                {value}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}
// END
