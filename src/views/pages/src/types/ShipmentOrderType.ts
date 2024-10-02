import type OrderType from "./OrderType"
import type OrderProduct from "./OrderProductType"

export default interface ShipmentOrderType{
    order_id: number
    created_at: Date
    updated_at: Date
    order_code: string
    order_status: string
    order_discount_code: string
    shipment: number
    order_total: number
    order_discount_total: number,
    
    delivery_time: Date
    user_id: number
    order_payment_method: string
    shipment_city: string
    shipment_state: string
    shipment_address: string
	shipment_zipcode: string 
    shipment_email: string
    shipment_phone: string
    shipment_to_company: boolean
    shipment_note: string
    is_invoice: boolean
    full_name: string
    shipped_time: Date
    delivering_time: Date
    delivered_time: Date
    prds: OrderProduct[]
    date: Date
    hour: string
    shipped_date: string
    shipped_time1: string
    delivering_time1: string
    delivering_date: string
    delivered_time1: string
    delivered_date: string
    
}