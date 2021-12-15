import { OrderStatus } from '@the-crew/common/enums';
import { Order } from '@the-crew/common/models';
import { Cart } from '../../types';

export function generateSubOrdersToBeSaved(_cartItems: Cart[], order: Order) {
  const _subOrders = [];
  _cartItems.forEach(x => {
    _subOrders.push({
      serviceId: x.id,
      orderId: order?.id,
      status: OrderStatus.SCHEDULED,
      quantity: x.quantity,
      price: x.price,
    });
  });
  return { bulk: _subOrders };
}
