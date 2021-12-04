import { useEffect } from 'react';
import { withRouter } from 'react-router';

import { TokenService } from '../../../services';
import { useAppDispatch } from '../../../store';
import { loadTokensAtStartup } from '../../../store/slices';
import { AuthThunks } from '../../../store/thunks';

const Startup = withRouter(props => {
  const dispatch = useAppDispatch();
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
  }, [dispatch]);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{props.children}</>;
});

export default Startup;
