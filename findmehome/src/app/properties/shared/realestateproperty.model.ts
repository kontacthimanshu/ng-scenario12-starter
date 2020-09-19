import { IRealEstatePropertyFacility } from './realestatepropertyfacility.model';

export interface IRealEstateProperty
{
    id: number
    name: string
    price: number
    imageUrl?:string
    builtUpArea: string
    carpetArea: string
    configuration: string
    facing?: string
    age: string
    type: string
    location: {
        address: string
        city: string
        country: string
    }
    facilities: IRealEstatePropertyFacility[]
}