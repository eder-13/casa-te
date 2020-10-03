import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Property } from "./interfaces/property.interface";
import { CreatePropertyDTO } from "./dto/property.dto";

@Injectable()
export class PropertyService {

    constructor(@InjectModel('property') readonly propertyModel: Model<Property>){}
    
    async createProperty(createPropertyDTO: CreatePropertyDTO): Promise<Property>{
            const newProperty = new this.propertyModel(createPropertyDTO);
            return await newProperty.save();
    }

    async readProperty(propertyID: string): Promise<Property>{
        const property = await this.propertyModel.findById(propertyID);
        return property;

    }

    async updateProperty(propertyID: string, createPropertyDTO: CreatePropertyDTO): Promise<Property>{
        const updatedProperty = await this.propertyModel.findByIdAndUpdate(propertyID,createPropertyDTO,{new: true});
        return updatedProperty;

    }

    async deleteProperty(propertyID: string): Promise<Property>{
        const deletedProperty = await this.propertyModel.findByIdAndDelete(propertyID);
        return deletedProperty;

    }


    
}

