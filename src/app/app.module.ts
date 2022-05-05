import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { TimeTrackerComponent } from './pages/time-tracker/time-tracker.component';
import { ProjectsService } from './shared/projects.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';

let routes = [
  { path: '**', redirectTo: 'tracker' },
  { path: 'tracker', component: TimeTrackerComponent },
  { path: 'projects', component: TimeTrackerComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],

  declarations: [
    AppComponent,
    HelloComponent,
    ProjectsListComponent,
    TimeTrackerComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ProjectsService, BsModalService],
})
export class AppModule {}
