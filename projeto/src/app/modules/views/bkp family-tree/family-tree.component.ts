import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss']
})
export class FamilyTreeComponent implements OnInit {

  constructor() { }
  mock: any;

  ngOnInit(): void {
    this.mock = {
      "Applicant": true,
      "Name": "1",
      "Birthday": "1992",
      "DeathDate": null,
      "LineageId": 1,
      "Lineage": {
        "id": 1,
        "Name": "Materna"
      },
      "Gender": "",
      "children": [
        {
          "Applicant": false,
          "Name": "1",
          "Birthday": "1992",
          "DeathDate": null,
          "LineageId": 1,
          "Lineage": {
            "id": 1,
            "Name": "Materna"
          },
          "Gender": "",
          "children": [

          ]
        },
        {
          "Applicant": false,
          "Name": "1-2",
          "Birthday": "1992",
          "DeathDate": null,
          "LineageId": 1,
          "Lineage": {
            "id": 1,
            "Name": "Materna"
          },
          "Gender": "",
          "children": [
            {
              "Applicant": false,
              "Name": "2",
              "Birthday": "1992",
              "DeathDate": null,
              "LineageId": 1,
              "Lineage": {
                "id": 1,
                "Name": "Materna"
              },
              "Gender": "",
              "children": [
                {
                  "Applicant": false,
                  "Name": "3",
                  "Birthday": "1992",
                  "DeathDate": null,
                  "LineageId": 1,
                  "Lineage": {
                    "id": 1,
                    "Name": "Materna"
                  },
                  "Gender": "",
                  "children": [

                  ]
                },
                {
                  "Applicant": false,
                  "Name": "3",
                  "Birthday": "1992",
                  "DeathDate": null,
                  "LineageId": 1,
                  "Lineage": {
                    "id": 1,
                    "Name": "Materna"
                  },
                  "Gender": "",
                  "children": [

                  ]
                },
                {
                  "Applicant": false,
                  "Name": "3",
                  "Birthday": "1992",
                  "DeathDate": null,
                  "LineageId": 1,
                  "Lineage": {
                    "id": 1,
                    "Name": "Materna"
                  },
                  "Gender": "",
                  "children": [

                  ]
                }
              ]
            }
          ]
        }

      ]
    }
  }
}
