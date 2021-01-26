export enum ScheduledTaskName {
    LoadGrechkaPrice = 'load-grechka-price'
}

export interface ScheduledTask {
    name: ScheduledTaskName
    run(): Promise<void>
}
