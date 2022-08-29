import { describe } from "mocha";
import chaiAsPromised from 'chai-as-promised';
import * as chai from 'chai'
import sinon from 'sinon'
import { User } from "../../src/domain/entities/User";
import { Product } from "../../src/domain/entities/Product";
import { Order } from "../../src/domain/entities/Order";

chai.use(chaiAsPromised)
const expect = chai.expect

describe('BDD - Creating an order', () => {
    it('BDD - Should create and order', () => {

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
    })
})