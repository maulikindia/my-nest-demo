export interface Task {
    id?: string,
    desc: string,
    title: string,
    status: TaskStatus
}

export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}