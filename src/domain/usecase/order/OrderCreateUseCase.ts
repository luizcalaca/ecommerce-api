import { MessageMail } from "../../entities/MessageMail";
import { Order } from "../../entities/Order";
import { IMail } from "../../providers/IMail";
import { CreateOrderRepository } from "../../repository/order/CreateOrderRepository";

class OrderCreateUseCase {
    constructor(
        private orderRepository: CreateOrderRepository,
        private mail: IMail) { }

    public async execute(entity: Order, message: MessageMail): Promise<Order> {
        await this.orderRepository.execute(entity)
        await this.mail.sendMail(message)
        return entity
    }
}

export { OrderCreateUseCase }