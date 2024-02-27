// ===================================================== Events Factory ============================================================
// ===================================================== Events Factory ============================================================

//  implement event sourcing in our Order class. 
// We will modify the class to record events like OrderCreated, OrderShipped, and OrderCancelled. 

// returns a class with the order state example ( [ OrderCreated { id: '2fee929b-a253-42a6-b737-771428647459' } ] )

export class OrderCreated{
    constructor(public readonly id: string){}
}
export class OrderShipped{
    constructor(public readonly id: string){}
}
export class OrderCancelled{
    constructor(public readonly id: string){}
}