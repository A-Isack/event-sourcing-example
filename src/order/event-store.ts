// we may use a databas instead of memory store 

export class EventStore{
    private events: any[] = [];

    addEvent(event: any){
        this.events.push(event)
    }

    getEvents(): any[]{
        return this.events
    }
}