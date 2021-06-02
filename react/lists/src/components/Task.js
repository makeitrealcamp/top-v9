import Title from './Title'

function Task({ title, done }) {
  return (
    <article>
      <Title>{title}</Title>
      <p>{done ? 'completed' : 'incompleted'}</p>
    </article>
  );
}

export default Task;
