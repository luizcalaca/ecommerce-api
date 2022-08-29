import { describe } from "mocha";
import chaiAsPromised from 'chai-as-promised';
import * as chai from 'chai'
import sinon from 'sinon'

class User {
    name: string
    email: string
}

class Order {
    user: User
    quantity: number
}


chai.use(chaiAsPromised)
const expect = chai.expect

describe('BDD - Creating an order', () => {
    it('BDD - Should create and order', () => {

        const user: User = {
            name: "John McBurguer",
            email: "johnburger@email.com"
        }

        const OrderMock: Order = {
            quantity: 0,
            user: user
        }
    })
})