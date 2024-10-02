import type CartType from '@/types/CartType'
import type UserType from '@/types/UserType'

export interface StateType {
    login: UserType,
    itemCart: CartType[],
    error: boolean,
}