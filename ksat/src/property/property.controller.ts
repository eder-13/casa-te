import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { CreatePropertyDTO } from "./dto/property.dto";
import { PropertyService } from "./property.service";

@Controller('property')
export class PropertyController {

    constructor(private propertyService: PropertyService){}
    
    @Post('/create')
    async createProperty(@Res() res,@Body() createPropertyDTO: CreatePropertyDTO){
        const property= await this.propertyService.createProperty(createPropertyDTO);
        return res.status(HttpStatus.OK).json({
            property
        });
    }

    @Get('/:id')
    async getProperty(@Res() res, @Param('id') id){
        const property = await this.propertyService.readProperty(id);
        if (!property) {
            throw new NotFoundException("Property does not exist");
        }
        return res.status(HttpStatus.OK).json({
            property
        });
    }

    @Put("/update/:id")
    async updateProperty(@Res() res,@Body() @Body() createPropertyDTO: CreatePropertyDTO,@Param('id') id){
        const property = await this.propertyService.updateProperty(id,createPropertyDTO);
        if (!property) {
            throw new NotFoundException("That property does not exist so it can't be modified");
        }
        return res.status(HttpStatus.OK).json({
            property
        })
        
    }

    @Delete('/delete/:id')
    async deleteProperty(@Res() res, @Param('id') id){
        const property = await this.propertyService.deleteProperty(id);
        if (!property) {
            throw new NotFoundException("That property already does not exist!");
            
        }
        return res.status(HttpStatus.OK).json({
            property
        });
    }
}
