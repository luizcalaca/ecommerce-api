import { describe } from "mocha";
import chaiAsPromised from 'chai-as-promised';
import * as chai from 'chai'
import sinon from 'sinon'
import { stubInterface } from "ts-sinon";
import { User } from "../../src/domain/entities/User";
import { Product } from "../../src/domain/entities/Product";
import { Order } from "../../src/domain/entities/Order";
import { IPersistence } from "../../src/domain/repository/IPersistence";
import { CreateOrderRepository } from "../../src/domain/repository/order/CreateOrderRepository";
import { OrderCreateUseCase } from "../../src/domain/usecase/order/OrderCreateUseCase";
import { MessageMail } from "../../src/domain/entities/MessageMail";
import { IMail } from "../../src/domain/providers/IMail";

chai.use(chaiAsPromised)
const expect = chai.expect

describe('BDD - Creating an order', () => {
    it('BDD - Should create an order', async () => {

        const userMock: User = {
            name: "John McBurguer",
            email: "johnburger@email.com"
        }

        const productMock: Product = {
            name: "Computer",
            price: 900.99
        }

        const OrderMock: Order = {
            quantity: 0,
            user: userMock,
            product: productMock
        }

        const messageMail: MessageMail = {
            from: "asdf@email.com",
            to: "fghj@email.com",
            subject: "TDD-BDD Tests with email",
            html: "<body>Hello, that's all<body>"
        }

        const iPersistence = stubInterface<IPersistence>()
        const orderRepository = new CreateOrderRepository(iPersistence)
        orderRepository.execute = sinon.stub().returns(OrderMock)

        const iMail = stubInterface<IMail>()
        const orderCreateUseCase = new OrderCreateUseCase(orderRepository, iMail)
        const result = await orderCreateUseCase.execute(OrderMock, messageMail)

        expect(result).to.be.equal(OrderMock)
    })
})