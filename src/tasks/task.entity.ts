import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { TaskStatus } from "./tasks.model";


@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 20 })
    title: string;

    @Column({ type: "varchar", length: 255 })
    desc: string;


    @Column({ type: "enum" })
    status: TaskStatus

}