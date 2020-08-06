import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: string[] = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];

  constructor() { }

  ngOnInit() {
  }

  add(experiment: string) {
    if (this.experiments.includes(experiment)) {
      alert('Experiment is already on the list.');
      return;
    }
    this.experiments.push(experiment);
  }

  remove(experiment: string) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }

  experimentBeingEdited: string = null;

  edit(experiment: string) {
    this.experimentBeingEdited = experiment;
 }

  save(name: string, experiment: string) {
    if (name === '') {
      alert('Please enter experiment name.');
      return;
    }
    if (this.experiments.includes(name)) {
      alert('Experiment is already on the list.');
      return;
    }
    let index = this.experiments.indexOf(experiment);
    this.experiments[index] = name;
    this.experimentBeingEdited = null;
  }
}
