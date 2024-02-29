import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../store/todoSlice';

interface TodoItemProps {
  id: number;
  text: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, text }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      {text}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
