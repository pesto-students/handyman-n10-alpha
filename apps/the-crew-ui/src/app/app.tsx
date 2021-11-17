import { Route } from 'react-router-dom';

import Header from '../components/header';
import Login from '../components/login';
import Register from '../components/register';

export function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact render={() => <Login />} />
      <Route path="/register" exact render={() => <Register />} />
    </div>
  );
}

export default App;
