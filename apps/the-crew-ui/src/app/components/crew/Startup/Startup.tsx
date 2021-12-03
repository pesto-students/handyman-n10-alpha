import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';

import { TokenService } from '../../../services';
import { loadTokensAtStartup } from '../../../store/reducers';
import { AuthThunks } from '../../../store/thunks';

const Startup = withRouter(props => {
  const dispatch = useDispatch();
  // check for token
  useEffect(() => {
    const accessToken = TokenService.getAccessToken();
    const refreshToken = TokenService.getRefreshToken();
    if (accessToken || refreshToken) {
      dispatch(loadTokensAtStartup({ accessToken, refreshToken }));
      setTimeout(() => {
        dispatch(AuthThunks.whoAmI());
      }, 10);
    }
  }, []);
  return <Fragment>{props.children}</Fragment>;
});

export default Startup;
