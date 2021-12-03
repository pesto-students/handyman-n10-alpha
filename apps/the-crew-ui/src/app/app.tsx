import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import style from './app.module.scss';
import { Footer, Header, Main, Startup } from './components';
import store from './store';
import { Bookings, Home, Login, NotFound404, Register, ServiceList } from './views';

export function App() {
  return (
    <div className={style.root}>
      <Provider store={store}>
        <Startup>
          <Header />
          <Main>
            <Switch>
              <Route path="/" exact render={() => <Home />} />
              <Route path="/login" exact render={() => <Login />} />
              <Route path="/register" exact render={() => <Register />} />
              <Route path="/services" exact render={() => <ServiceList />} />
              <Route path="/bookings" exact render={() => <Bookings />} />
              <Route render={() => <NotFound404 />} />
            </Switch>
            <Footer />
          </Main>
        </Startup>
      </Provider>
    </div>
  );
}

export default App;
