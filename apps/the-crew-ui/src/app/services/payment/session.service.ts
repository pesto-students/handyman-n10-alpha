enum PaymentDetails {
  PAYMENT_SESSION_ID = 'payment_session_id',
}

/**
 * Get payment session id from local storage
 * @returns Payment session Id
 */
function getPaymentSession() {
  return localStorage.getItem(PaymentDetails.PAYMENT_SESSION_ID);
}

/**
 * Set payment session id into local storage
 * @param sessionId
 */
function setPaymentSession(sessionObject: string) {
  localStorage.setItem(PaymentDetails.PAYMENT_SESSION_ID, sessionObject);
}

/**
 * Removes payment session object from local storage
 */
function removePaymentSession() {
  localStorage.removeItem(PaymentDetails.PAYMENT_SESSION_ID);
}

export { getPaymentSession, setPaymentSession, removePaymentSession };

export const PaymentSessionService = {
  getPaymentSession,
  setPaymentSession,
  removePaymentSession,
};
