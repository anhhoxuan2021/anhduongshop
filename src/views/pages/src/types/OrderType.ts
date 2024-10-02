export default interface OrderType {
  order_id : number;
  created_at: Date;
  updated_at:Date;
  order_code: string;
  order_status: string;
  order_discount_code:string
  shipment: number
  order_total: number
  order_discount_total: number
  delivery_time:Date
  user_id: number
  order_payment_method: string
  }

