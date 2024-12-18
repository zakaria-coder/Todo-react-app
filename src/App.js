import Todo from './components/Todo';
function App(props) {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn react" />
      <Todo text="master react" />
      <Todo text="deep dive into react" />
    </div>
  );
}

export default App;
