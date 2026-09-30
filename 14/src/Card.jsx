import React from 'react';

// BEGIN (write your solution here)
const Card = ({children}) => <div className="card">{children}</div>;
Card.Body = ({children}) => <div className="card-body">{children}</div>;
Card.Text = ({children}) => <p className="card-text">{children}</p>;
Card.Title = ({children}) => <h4 className="card-title">{children}</h4>;
export default Card;
// END
