import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions =
{
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'mj123',
    database: 'nestjs_mysql_crud',
    entities: [
        __dirname + '/../**/*.entity.ts'
        // "../src/**/*.entity{.ts,.js}"
    ],
    synchronize: true

}