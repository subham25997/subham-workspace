import { Routes } from '@angular/router';
import { MapComponent } from "../views/map/map.component";
import { ListComponent } from '../views/list/list.component';
import { SettingsComponent } from '../views/settings/settings.component';

export const routes: Routes = [{
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
},
{
    path: "home",
    component: MapComponent
},
{
    path: "list",
    component: ListComponent
},
{
    path: "settings",
    component: SettingsComponent
}];
