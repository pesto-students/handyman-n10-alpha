import { useMediaQuery, useTheme } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import style from './app.module.scss';
import { Footer, Header, Main, Startup } from './components';
import store from './store';
import { Bookings, Home, Login, NotFound404, Register, SearchService, ServiceList } from './views';

export function App() {
  const theme = useTheme();
  const xsView = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        horizontal: xsView ? 'center' : 'right',
        vertical: xsView ? 'bottom' : 'top',
      }}
    >
      <div className={style.root}>
        <Provider store={store}>
          <Startup>
            <Header />
            <Main>
              <Switch>
                <Route path="/" exact render={() => <Home />} />
                <Route path="/login" exact render={() => <Login />} />
                <Route path="/register" exact render={() => <Register />} />
                <Route path="/search" exact render={() => <SearchService />} />
                <Route path="/bookings" exact render={() => <Bookings />} />
                <Route render={() => <NotFound404 />} />
              </Switch>
              <Footer />
            </Main>
          </Startup>
        </Provider>
      </div>
    </SnackbarProvider>
  );
}

export default App;
