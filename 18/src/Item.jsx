import React from 'react';

// BEGIN (write your solution here)
const Item = ({ task, onClick })=>{
  const handleClick = (e)=>{
    e.preventDefault();
    onClick(task);
  };
  const link = (
    <a href="#" className="todo-task" onClick={handleClick}>
      {task.text}
    </a>
  );
  return(
    <div className="row">
      <div className="col-1">{task.id}</div>
      <div className="col">
        {task.state === 'finished' ? <s>{link}</s> : link}
      </div>
    </div>
  );
};
export default Item;
// END
