import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NotificationComponent } from './pages/notification/notification.component';
import{MailComponent} from './admin/mail/mail.component';
import { CustomerServiceComponent } from './pages/customer-service/customer-service.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'reports',component:ReportsComponent},
  {path:'admin',component:AdminComponent},
  {path:'notification',component:NotificationComponent},
  {path:'mail',component:MailComponent},
  { path:'customer-service', component: CustomerServiceComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
