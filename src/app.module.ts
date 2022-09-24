import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './products/products.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Product } from './products/entities/product.entity';
import { ProductCategory } from './product-category/entities/product-category.entity';
import { Employee } from './employees/entities/employee.entity';
import { Customer } from './customers/entities/customer.entity';
@Module({
  imports: [UsersModule, 
    CustomersModule, 
    EmployeesModule, 
    ProductsModule, 
    ProductCategoryModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '32813235',
      database: 'migracion',
      entities: [
        User,
        Product,
        ProductCategory,
        Employee,
        Customer
      ],
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}

