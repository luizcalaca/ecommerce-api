import { Order } from "../../entities/Order";
import { IPersistence } from "../IPersistence";

class CreateOrderRepository {
    constructor(private iPersistence: IPersistence) { }

    public async execute(entity: Order): Promise<void> {
        await this.iPersistence.create(entity)
    }
}

export { CreateOrderRepository }