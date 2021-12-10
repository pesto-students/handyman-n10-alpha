import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Stripe from 'stripe';
import { RootState } from '../store';
import { PaymentThunks } from '../thunks';

type PaymentState = {
  session: Stripe.Checkout.Session;
  isLoading: boolean;
};

const initialState: PaymentState = {
  session: null,
  isLoading: false,
};
const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(PaymentThunks.createCheckoutSession.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        PaymentThunks.createCheckoutSession.fulfilled,
        (state, action: PayloadAction<Stripe.Checkout.Session>) => {
          state.session = action.payload;
          state.isLoading = false;
        },
      ),
});

export const paymentReducer = paymentSlice.reducer;

export const paymentSelectors = (state: RootState) => state.payment;
