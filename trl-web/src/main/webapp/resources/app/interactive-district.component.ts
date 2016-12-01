import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {District} from "./district";
import {Path} from "./path";
import {MapService} from './map.service';

import {FoundPathsPipe} from './found-paths.pipe'


@Component({
    moduleId: module.id,
    selector: 'interactiveMap',
    template: `

    <link rel="stylesheet" href="./interactive-district.component.css">

    <h3 *ngIf="district && !selectedPath">Selected subdistrict for {{district.title}}:</h3>
    <h3 *ngIf="selectedPath">Selected subdistrict for {{district.title}}: {{selectedPath.title}}</h3>

    <div>
        <input (keyup)="onKey($event)">
        <div *ngIf="district">
            <div *ngFor="let path of district.paths | foundPaths">
                {{path.title}}
            </div>
        </div>
    </div>

    <div *ngIf="district">
        <svg width="800" height="600" viewBox="0 0 744.09449 1052.3622"
             preserveAspectRatio="xMinYMin meet" xmlns:svg="http://www.w3.org/1999/html">

          <svg:g [attr.title]="district.title" [attr.transform]="district.transform" >
               <svg:path *ngFor="let path of district.paths" [attr.d]="path.d"
                        [attr.title]="path.title"
                        (mouseover)="mouseOver(path)" [ngClass]="setClasses(path)"></svg:path>
          </svg:g>

        </svg>
    </div>
    `,
    providers: [MapService],
    pipes: [FoundPathsPipe]

})
export class InteractiveDistrictComponent implements OnInit {

    district:District;
    selectedPath:Path;
    search = '';

    constructor(private route:ActivatedRoute, private mapService:MapService) {
    }

    ngOnInit():void {
        this.route.params.forEach((params:Params) => {
            let title = params['title'];
            this.mapService.getDistrict(title)
                .then(district => this.district = district);
        });
    }

    mouseOver(path) {
        this.selectedPath = path;
    }

    onKey(event:any) {
        this.search = event.target.value;
        for (let path of this.district.paths) {
            path.setFound(this.search && path.title.startsWith(this.search));
        }
    }

    setClasses(path: Path) {
        let classes = {
            path: !path.found,
            pathSlected: path.found
        }
        return classes;
    }

}