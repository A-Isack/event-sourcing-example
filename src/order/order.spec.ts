// running a test for order 

import { Order } from "./order.entity";
import { replayEvents } from "./events-util";

describe('Order - EventSourcing', ()=>{
    it('should correctly apply and replay events', ()=>{
        const order = new Order()
        order.applyOrderCreated()
        order.applyOrderShipped()

        const events = order.events;
        console.log('new order events from the test')
        console.log(events)
        const newOrder = new Order();
        replayEvents(newOrder, events);

        expect(newOrder.status).toBe('SHIPPED');
    })
})