import { Product } from "./Product"
import { User } from "./User"

class Order {
    user: User
    product: Product
    quantity: number
}

export { Order }