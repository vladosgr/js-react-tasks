import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { text, items } = this.state;
    const item = { id: uniqueId(), text };
    this.setState({ items: [item, ...items], text: '' });
  };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleRemove = (id) => {
    this.setState(({ items }) => ({ items: items.filter((item) => item.id !== id) }));
  };
  render() {
    const { items, text } = this.state;
    return (
      <div>
        <div className="mb-3">
          <form className="d-flex" onSubmit={this.handleSubmit}>
            <div className="me-3">
              <input
                type="text"
                value={text}
                required
                className="form-control"
                placeholder="I am going..."
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>
        {items.map((task) => (
          <Item key={task.id} task={task} onRemove={this.handleRemove} />
        ))}
      </div>
    );
  }
}
// END
