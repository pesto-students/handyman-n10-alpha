import { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';

import { TokenService } from '../../../services';
import { useAppDispatch, useAppSelector } from '../../../store';
import { AuthThunks } from '../../../store/thunks';
import { OverlayLoading } from '../../generic';

const Startup = withRouter(props => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { isLoading } = useAppSelector(state => state.generic.loader);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = TokenService.getAccessToken();
    const refreshToken = TokenService.getRefreshToken();
    if (accessToken || refreshToken) {
      setTimeout(() => {
        dispatch(AuthThunks.whoAmI())
          .unwrap()
          .catch(() => {
            history.push('/login');
          })
          .finally(() => {
            setLoading(false);
          });
      }, 10);
    } else {
      setLoading(false);
    }
  }, [dispatch]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {loading ? (
        <OverlayLoading open={loading} />
      ) : (
        <>
          {props.children}
          <OverlayLoading open={isLoading} />
        </>
      )}
    </>
  );
});

export default Startup;
