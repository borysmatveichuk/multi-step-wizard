import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonalComponent} from './personal/personal.component';
import {WorkComponent} from './work/work.component';
import {AddressComponent} from './address/address.component';
import {ResultComponent} from './result/result.component';

export const appRoutes: Routes = [
  {path: 'personal', component: PersonalComponent},
  {path: 'work', component: WorkComponent},
  {path: 'address', component: AddressComponent},
  {path: 'result', component: ResultComponent},
  {path: '', redirectTo: '/personal', pathMatch: 'full'},
  {path: '**', component: PersonalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
