import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import store from './store';

import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import ServiceOverviewComponent from './components/servicesOverview';

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <Provider store={store}>
        <Header />
        {/* <Home /> */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/register" exact render={() => <Register />} />
          <Route path="/services" exact render={() => <ServiceOverviewComponent />} />
        </div>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
