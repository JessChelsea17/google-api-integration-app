export interface Event {
    id: string,
    eventname: string,
    eventlocation?: string;
    description?: string,
    startdate: any;
    enddate: any;
    timezone: any;
}