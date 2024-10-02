export default interface ShipmentType{
    shipment_id : number
    created_at: Date
    updated_at: Date
    shipment_city: string
    shipment_state: string
    shipment_zipcode: string
    shipment_address: string
    shipment_email: string
    shipment_phone: string
    shipment_note: string
    shipment_to_company: boolean
    is_invoice: boolean
    full_name: string
    user_id: number
    shipped_time: Date
    delivering_time: Date
    delivered_time: Date
    fast_delivery: boolean
}