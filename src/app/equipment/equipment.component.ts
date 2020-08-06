import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipments: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];

  constructor() { }

  ngOnInit() {
  }

  add(equipment: string) {
    if (this.equipments.includes(equipment)) {
      alert('Equipment is already on the list.');
      return;
    }
    this.equipments.push(equipment);
  }

  remove(equipment: string) {
    let index = this.equipments.indexOf(equipment);
    this.equipments.splice(index, 1);
  }

  equipmentBeingEdited: string = null;

  edit(equipment: string) {
    this.equipmentBeingEdited = equipment;
 }

  save(name: string, equipment: string) {
    if (name === '') {
      alert('Please enter equipment name.');
      return;
    }
    if (this.equipments.includes(name)) {
      alert('Equipment is already on the list.');
      return;
    }
    let index = this.equipments.indexOf(equipment);
    this.equipments[index] = name;
    this.equipmentBeingEdited = null;
  }

}
