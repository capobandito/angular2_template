import { provideRouter, RouterConfig } from '@angular/router';

import { SchedulerComponent } from './scheduler.component';
import { BatchImportComponent } from './batchimport.component';
import { ImportComponent } from './import.component';
import { TableComponent } from './table.component';

import {InteractiveMapComponent} from './interactive-map.component'
import {InteractiveDistrictComponent} from './interactive-district.component'
import {TableDataComponent} from "./table/table.data.component";

const routes: RouterConfig = [
    { path: '', component: InteractiveMapComponent},
    { path: 'scheduler', component: SchedulerComponent },
    { path: 'batch-import', component: BatchImportComponent },
    { path: 'import', component: ImportComponent },
    { path: 'table', component: TableComponent },
    { path: 'data-table', component: TableDataComponent},
    {
        path: 'district/:title',
        component: InteractiveDistrictComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];