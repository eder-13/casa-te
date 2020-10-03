import { Module } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';
import { MongooseModule } from "@nestjs/mongoose";
import { propertySchema } from "./schema/property.schema";

@Module({
  imports: [MongooseModule.forFeature([
    {name: "property", schema: propertySchema }
  ])],
  controllers: [PropertyController],
  providers: [PropertyService]
})
export class PropertyModule {}
