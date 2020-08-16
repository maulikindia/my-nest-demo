import { Controller, Get, Post, Body, Query, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.model';
import { CreateDto } from './dtos/create-task.dto';
import { FilterDto } from './dtos/get-tasks-filter.dto';
import { StatusValidation } from './pipes/task-status-validation.pipe';
import { SearchValidation } from './pipes/sample-search-validation.pipe';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) { }

    //get all tasks / filter by status and search
    // @Get('')
    // getAllTasks(@Query(ValidationPipe) filterDto: FilterDto): Task[] {

    //     if (filterDto !== undefined) {
    //         return this.taskService.filterTask(filterDto);
    //     }
    //     return this.taskService.getAllTasks();
    // }


    // //add new task
    // @Post('')
    // //use UsePipes decorater to add validation
    // //Validationpipe is built-in validation pipe 
    // @UsePipes(ValidationPipe)
    // addTask(@Body() createTask: CreateDto): Task {
    //     return this.taskService.createTask(createTask);
    // }


    // //get specific status by id
    // @Get('byId')
    // getById(@Query('id') id: string) {
    //     return this.taskService.getTaskById(id);
    // }

    // //delete task by id
    // @Delete('byId')
    // deleteById(@Query('id') id: string) {
    //     return this.taskService.deleteTaskById(id);
    // }


    // //update status by id
    // @Put('byId')
    // //pass custom validation pipe -StatusValidation  to validate query
    // updateById(@Query('id') id: string, @Body('status', StatusValidation) status: TaskStatus) {
    //     return this.taskService.updateTaskById(id, status)
    // }


    // //filter api
    // @Get('filter')
    // filter(@Query('status') status: string) {
    //     if (status) {
    //         return this.taskService.filterTaskByStatus(status)
    //     }
    //     else {
    //         return { msg: 'Please add some status' }
    //     }
    // }


    // //sample search api to validate sample search
    // @Get('mock')
    // getMockData(@Body('data', SearchValidation) data: string) {
    //     return this.taskService.getSampleData(data);
    // }


    @Get('getAll')
    async getAllTasks() {
        return await this.taskService.getAllTask();
    }
}
