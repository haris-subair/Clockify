import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
class Project {
  'name': string;
  'duration': string;
}

export class ProjectsService {
  projectData: Project[] = [];
  timer: any;

  constructor() {}

  onNewProject(project: Project) {
    this.projectData.push({ name: project.name, duration: '' });
  }

  onDeleteProject(index) {}

  startTimer(index) {
    this.timer = timer(1000000000);
  }

  stopTimer(index) {}
}
