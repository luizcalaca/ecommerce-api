import { Order } from "../../entities/Order";
import { CreateOrderRepository } from "../../repository/order/CreateOrderRepository";

class OrderCreateUseCase {
    constructor(private orderRepository: CreateOrderRepository) { }

    public async execute(entity: Order): Promise<Order> {
        await this.orderRepository.execute(entity)
        return entity
    }
}

export { OrderCreateUseCase }