import { axiosInstance } from '../../core/services';

const basePath = 'payment';
const instance = axiosInstance;

function createCheckoutSession(data) {
  const url = `${basePath}/create-checkout-session`;
  return instance.post(url, data);
}

function retrievePaymentSession(data) {
  const url = `${basePath}/retrieve-payment-session`;
  return instance.post(url, data);
}

export const PaymentService = {
  createCheckoutSession,
  retrievePaymentSession,
};

export { createCheckoutSession, retrievePaymentSession };
