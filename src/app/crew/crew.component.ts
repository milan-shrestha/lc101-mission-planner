import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    for (let i = 0; i < this.crew.length; i++) {
      if (this.crew[i]['name'] === memberName) {
        alert('Crew member is already on the list.');
        return;
      }
    }
    this.crew.push({name: memberName, firstMission: isFirst});
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  memberBeingEdited: object = null;

  edit(member: object) {
    this.memberBeingEdited = member;
 }

  save(name: string, member: object) {
    if (name === '') {
      alert('Please enter name for the crew member.');
      return;
    }
    for (let i = 0; i < this.crew.length; i++) {
      if (this.crew[i]['name'] === name) {
        alert('Crew member is already on the list.');
        return;
      }
    }
    member['name'] = name;
    this.memberBeingEdited = null;
  }
}
