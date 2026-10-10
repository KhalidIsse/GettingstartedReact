import UserList from './userlist';
import LoginForm from './LoginForm';
// function App(){
const App = () => {
  const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
  ];

  return (
    <div>
      <UserList users={users} />
      <LoginForm />
    </div>
  );
};


export default App




