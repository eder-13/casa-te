import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/kste-app'), PropertyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
