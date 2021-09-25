import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatarazzoService } from '../../../service/matarazzo.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  constructor(
    private router: Router,
    private matarazzoService: MatarazzoService, 
    private route: ActivatedRoute, 
  ) { }

  familyTree: any = [];
  id: any;

  ngOnInit(): void {
    this.route.params.subscribe(p => 
      {
        this.id = p['id'];
    });

    this.generateTree()
    // this.mock = {
    //   "Applicant": true,
    //   "Name": "1",
    //   "Birthday": "1992",
    //   "DeathDate": null,
    //   "LineageId": 1,
    //   "Lineage": {
    //     "id": 1,
    //     "Name": "Materna"
    //   },
    //   "Gender": "",
    //   "children": [
    //     {
    //       "Applicant": false,
    //       "Name": "1",
    //       "Birthday": "1992",
    //       "DeathDate": null,
    //       "LineageId": 1,
    //       "Lineage": {
    //         "id": 1,
    //         "Name": "Materna"
    //       },
    //       "Gender": "",
    //       "children": [

    //       ]
    //     },
    //     {
    //       "Applicant": false,
    //       "Name": "1-2",
    //       "Birthday": "1992",
    //       "DeathDate": null,
    //       "LineageId": 1,
    //       "Lineage": {
    //         "id": 1,
    //         "Name": "Materna"
    //       },
    //       "Gender": "",
    //       "children": [
    //         {
    //           "Applicant": false,
    //           "Name": "2",
    //           "Birthday": "1992",
    //           "DeathDate": null,
    //           "LineageId": 1,
    //           "Lineage": {
    //             "id": 1,
    //             "Name": "Materna"
    //           },
    //           "Gender": "",
    //           "children": [
    //             {
    //               "Applicant": false,
    //               "Name": "3",
    //               "Birthday": "1992",
    //               "DeathDate": null,
    //               "LineageId": 1,
    //               "Lineage": {
    //                 "id": 1,
    //                 "Name": "Materna"
    //               },
    //               "Gender": "",
    //               "children": [

    //               ]
    //             },
    //             {
    //               "Applicant": false,
    //               "Name": "3",
    //               "Birthday": "1992",
    //               "DeathDate": null,
    //               "LineageId": 1,
    //               "Lineage": {
    //                 "id": 1,
    //                 "Name": "Materna"
    //               },
    //               "Gender": "",
    //               "children": [

    //               ]
    //             },
    //             {
    //               "Applicant": false,
    //               "Name": "3",
    //               "Birthday": "1992",
    //               "DeathDate": null,
    //               "LineageId": 1,
    //               "Lineage": {
    //                 "id": 1,
    //                 "Name": "Materna"
    //               },
    //               "Gender": "",
    //               "children": [

    //               ]
    //             }
    //           ]
    //         }
    //       ]
    //     }

    //   ]
    // }
  }

  generateTree() {
    debugger
    this.matarazzoService.GenerateTree(this.id)
      .subscribe(
        family => {
          this.familyTree = family;
        },
        error => {

        }
      )
  }
}