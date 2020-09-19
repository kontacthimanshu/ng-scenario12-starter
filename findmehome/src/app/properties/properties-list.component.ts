import { Component, OnInit } from '@angular/core';
import { PropertiesService } from './shared/properties.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IRealEstateProperty } from './shared/realestateproperty.model';

@Component({
    selector:'properties-list',
    templateUrl:'./properties-list.component.html'    
})
export class PropertyListComponent implements OnInit
{
    props:IRealEstateProperty[];

    constructor(private propertiesService:PropertiesService, private toastrService:ToastrService, private route:ActivatedRoute)
	  {
	  }

    ngOnInit()
    {
      this.props = this.route.snapshot.data["props"];
    }
	
    handleThumbnailClick(propertyName)
    {
      this.toastrService.success('Clicked ' + propertyName, 'Attention!!');
    }
}