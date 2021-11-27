import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store from './store';

import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import ServiceOverviewComponent from './components/servicesOverview';
import MyBookings from './components/bookings';
import ErrorComponent from './components/errorPage';

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <Provider store={store}>
        <Header />
        {/* <Home /> */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <Home />
                  <Footer />
                </>
              )}
            />
            <Route
              path="/login"
              exact
              render={() => (
                <>
                  <Login />
                  <Footer />
                </>
              )}
            />
            <Route
              path="/register"
              exact
              render={() => (
                <>
                  <Register />
                  <Footer />
                </>
              )}
            />
            <Route path="/services" exact render={() => <ServiceOverviewComponent />} />
            <Route
              path="/bookings"
              exact
              render={() => (
                <>
                  <MyBookings />
                  <Footer />
                </>
              )}
            />
            <Route render={() => <ErrorComponent />} />
          </Switch>
        </div>
      </Provider>
    </div>
  );
}

export default App;
