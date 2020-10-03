import { Schema } from "mongoose";

export const propertySchema = new Schema({
    price: Number,
    sellType: String,
    cantbaths: Number,
    cantRooms: Number,
    placeType: String,
    area: Number,
    numFloors: Number,
    city: String,
    address: String,
    comments: String,
    xtras:{type: Array, "default":[]},
    id_user: String,
    images:{type: Array, "default":[]}
});