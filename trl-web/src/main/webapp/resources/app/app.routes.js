"use strict";
var router_1 = require('@angular/router');
var scheduler_component_1 = require('./scheduler.component');
var batchimport_component_1 = require('./batchimport.component');
var import_component_1 = require('./import.component');
var table_component_1 = require('./table.component');
var interactive_map_component_1 = require('./interactive-map.component');
var interactive_district_component_1 = require('./interactive-district.component');
var table_data_component_1 = require("./table/table.data.component");
var routes = [
    { path: '', component: interactive_map_component_1.InteractiveMapComponent },
    { path: 'scheduler', component: scheduler_component_1.SchedulerComponent },
    { path: 'batch-import', component: batchimport_component_1.BatchImportComponent },
    { path: 'import', component: import_component_1.ImportComponent },
    { path: 'table', component: table_component_1.TableComponent },
    { path: 'data-table', component: table_data_component_1.TableDataComponent },
    {
        path: 'district/:title',
        component: interactive_district_component_1.InteractiveDistrictComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map