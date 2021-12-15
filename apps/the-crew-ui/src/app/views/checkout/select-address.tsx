import {
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  RadioGroup,
  Typography,
} from '@mui/material';
import { UserAddress, uuid } from '@the-crew/common';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { CartSessionService } from '../../services';

import { useAppDispatch, useAppSelector } from '../../store';
import { authSelector, cartSelectors, userAddressSelectors } from '../../store/slices';
import { createCheckoutSession } from '../../store/thunks';
import { userAddressThunks } from '../../store/thunks/user-address.thunk';
import style from './checkout.module.scss';
import SavedAddress from './saved-addresses';

export default function SelectAddress() {
  const [selectedAddress, setSelectedAddress] = useState<uuid>(null);
  const savedAddresses = useAppSelector(state =>
    userAddressSelectors.selectAll(state.userAddresses),
  );
  const loading = useAppSelector(state => state.userAddresses.loading);
  const authState = useAppSelector(authSelector);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => cartSelectors.selectAll(state.cart));

  const handlePayment = () => {
    CartSessionService.setCartItems(JSON.stringify(cartItems));
    dispatch(createCheckoutSession(cartItems)).then(res => {
      window.location = res.payload.url;
    });
  };
  useEffect(() => {
    dispatch(
      userAddressThunks.getUserAddresses({
        join: [{ field: 'user' }],
        filter: [
          {
            field: 'userId',
            operator: '$eq',
            value: `{${authState.user.id}}`,
          },
        ],
      }),
    );
  }, [authState.user.id, dispatch]);
  return (
    <>
      <Typography variant="h6" textAlign="center">
        Select Address
      </Typography>
      <DialogContent dividers className={style['dialog-content']}>
        <RadioGroup
          value={selectedAddress}
          onChange={e => {
            setSelectedAddress(e.target.value);
          }}
        >
          {savedAddresses.map((item, index) => (
            <SavedAddress key={index} index={index} data={item} />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions sx={{ padding: '16px' }}>
        <Button
          color="primary"
          disabled={selectedAddress !== null}
          onClick={() => {
            //handleCreateNewAddress();
            console.log();
          }}
        >
          Add New Address
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={selectedAddress === null}
          onClick={() => {
            if (!authState.user) {
              history.push('/login');
            } else {
              handlePayment();
            }
          }}
        >
          Next
        </Button>
      </DialogActions>
    </>
  );
}
