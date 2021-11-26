import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import store from './store';

import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import ServiceOverviewComponent from './components/servicesOverview';
import MyBookings from './components/bookings';

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <Provider store={store}>
        <Header />
        {/* <Home /> */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
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
        </div>
      </Provider>
    </div>
  );
}

export default App;
