import { provideRouter, RouterConfig } from '@angular/router';

import { SchedulerComponent } from '/resources/app/scheduler.component';
import { BatchImportComponent } from '/resources/app/batchimport.component';
import { ImportComponent } from '/resources/app/import.component';
import { TableComponent } from '/resources/app/table.component';

import {InteractiveMapComponent} from '/resources/app/interactive-map.component'
import {InteractiveDistrictComponent} from '/resources/app/interactive-district.component'

const routes: RouterConfig = [
    { path: '', component: InteractiveMapComponent},
    { path: 'scheduler', component: SchedulerComponent },
    { path: 'batch-import', component: BatchImportComponent },
    { path: 'import', component: ImportComponent },
    { path: 'table', component: TableComponent },
    {
        path: 'district/:title',
        component: InteractiveDistrictComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];