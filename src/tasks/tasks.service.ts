import { Injectable, NotFoundException } from '@nestjs/common';
// import { Task, TaskStatus } from './tasks.model';
import { CreateDto } from './dtos/create-task.dto';
// import { FilterDto } from './dtos/get-tasks-filter.dto';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';


@Injectable()
export class TasksService {


    // private tasks = [];
    // myArr = ['name', 'ssdd'];



    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }

    // createTask(createTask: CreateDto): Task {
    //     let id = Date.now().toString();
    //     const { title, desc } = createTask;
    //     const obj: Task = {
    //         id: id,
    //         title: title,
    //         desc: desc,
    //         status: TaskStatus.OPEN,
    //     }

    //     this.tasks.push(obj);
    //     return obj;

    // }

    // getTaskById(id: string): Task {

    //     let newArr = this.tasks.find(task => task.id === id);
    //     if (!newArr) {
    //         throw new NotFoundException(`Task  is not found for id: ${id}`)
    //     }
    //     return newArr;
    // }

    // deleteTaskById(id: string) {
    //     let foundId = this.getTaskById(id);
    //     this.tasks = this.tasks.filter(task => task.id !== foundId.id);
    // }

    // updateTaskById(id: string, status: TaskStatus): Task {

    //     const task = this.getTaskById(id);
    //     task.status = status;

    //     return task;
    // }


    // filterTask(filterDto: FilterDto): Task[] {
    //     let tasks = this.getAllTasks();
    //     let { search, status } = filterDto;
    //     if (search) {
    //         tasks = tasks.filter(task => task.desc.includes(search) || task.title.includes(search));
    //     }
    //     if (status) {
    //         tasks = tasks.filter(task => task.status === status);
    //     }
    //     return tasks;
    // }


    // filterTaskByStatus(status: string): Task[] {

    //     let tasks = this.tasks;
    //     tasks = tasks.filter(task => task.status === status);
    //     return tasks;
    // }

    // getSampleData(val: string) {
    //     return { data: val };
    // }


    constructor(
        @InjectRepository(TaskRepository)
        private readonly taskRepository: TaskRepository
    ) { }

    async getAllTask(): Promise<Task[]> {
        try {
            const result = await this.taskRepository.find();
            return result;
        } catch (error) {

        }

    }


    async getSingleTask(id: string): Promise<Task> {
        try {
            const getId = await this.taskRepository.findOne(id);
            return getId;
        } catch (error) {

        }
    }


    async addTask(createDto: CreateDto): Promise<Task> {
        try {
            return await this.taskRepository.save(createDto);
        } catch (error) {

        }
    }

    // async deleteSingleTask(id: string) {
    //     try {
    //         return await this.taskRepository.deletebY
    //     } catch (error) {

    //     }
    // }

}
