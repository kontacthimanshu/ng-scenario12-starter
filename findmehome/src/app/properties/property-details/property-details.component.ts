import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from '../shared/properties.service';
import { IRealEstateProperty } from '../shared/realestateproperty.model';

@Component({
	selector:'property-details',
	templateUrl:'./property-details.component.html'
})
export class PropertyDetailsComponent implements OnInit
{
	prop:IRealEstateProperty;

	constructor(private propertyService:PropertiesService, private route:ActivatedRoute)
	{

	}

	ngOnInit()
	{
		this.prop = this.propertyService.getPropertyById(+this.route.snapshot.params['id']);		
	}
}