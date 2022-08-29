import { describe } from "mocha";
import chaiAsPromised from 'chai-as-promised';
import * as chai from 'chai'
import sinon from 'sinon'

class Order {
    quantity: number
}


chai.use(chaiAsPromised)
const expect = chai.expect

describe('BDD - Creating an order', () => {
    it('BDD - Should create and order', () => {
        const OrderMock: Order = {
            quantity: 0
        }
    })
})