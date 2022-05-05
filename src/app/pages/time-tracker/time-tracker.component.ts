import { Component, TemplateRef } from '@angular/core';
import { ProjectsService } from '../../shared/projects.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'time-tracker',
  templateUrl: 'time-tracker.component.html',
  styleUrls: ['time-tracker.component.scss'],
})
export class TimeTrackerComponent {
  modalRef?: BsModalRef;
  projectName: any = '';
  timerRunning: Boolean = false;
  timerStarted: any;
  timerStoppped: any;
  duration: any;
  constructor(
    private projectService: ProjectsService,
    private modalService: BsModalService
  ) {}

  onNewProject(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.projectService.timer.subscribe((event) => {
      debugger;
    });
  }

  onStartTimer() {
    this.timerRunning = true;
    this.timerStarted = new Date();
    console.log('this');
    this.projectService.startTimer(0);
  }

  onStopTimer() {
    this.timerStoppped = new Date();
    this.duration = this.timerStoppped - this.timerStarted;
    this.timerStarted = undefined;
    this.timerRunning = false;
  }
}
