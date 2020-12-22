import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import data  from '../../../src/assets/data.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mappedArr:  any[][] = [];
  tree: any[] = [];
  options = {};
 arrElem = '';
  mappedElem= [];
  categoryhelper= [{}];
  constructor() { }

  ngOnInit(): void {
    data.map(item => {
      this.categoryhelper.push({
        id: item.id,
        name: item.name,
        parentId: item.parentId,
        children: []
      });
    });
    this.unflatten(this.categoryhelper);
  }
  unflatten(arr:any) {
    let treeChild = [];
    // First map the nodes of the array to an object -> create a hash table.
    // for (var i = 0, len = arr.length; i < len; i++) {
    // //  arrElem = arr[i];
    //   console.log(arr[i]);
    //   this.mappedArr[arr[i].id] = arr[i];
    //   console.log(this.mappedArr[arr[i].id]);
    // }
    // console.log("mappedArr:",this.mappedArr);
    
    // for (var id in this.mappedArr) {
    //   if (this.mappedArr.hasOwnProperty(id)) {
    //     this.mappedElem = this.mappedArr[id];
    //     console.log("mappedArr:", this.mappedArr[id])
    //     console.log("-----mappedElem:", this.mappedElem.parentId)
    //     // If the element is not at the root level, add it to its parent array of children.
    //     if (this.mappedElem.parentId) {

    //       console.log("++++mappedElem:", this.mappedElem.parentId)
    //       console.log("this.mappedArr:9999", this.mappedArr)
    //       console.log("this.mappedElem[");
          

    //       this.mappedArr[this.mappedElem['parentId']]['children'].push(this.mappedElem);
    //     }
    //     // If the element is at the root level, add it to first level elements array.
    //     else {
    //       this.tree.push(this.mappedElem);
    //     }
    //   }
    // }
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i].parentId == 0) {
        arr[i]['children'] = []
        this.tree.push(arr[i]);
      } else {
        arr[i]['children'] = [];
        treeChild.push(arr[i])
      }
    }
    let clone = treeChild;
    for (let p = 0; p < treeChild.length; p++) {
      for (let j = 0; j < clone.length; j++) { 
        // console.log("treeChild[p]['id']",treeChild[p]['id']);

        // console.log("clone[j]['parentId']", clone[j]['parentId']);
        if (treeChild[p]['id'] == clone[j]['parentId']) {
          treeChild[p]['children'].push(clone[j])
        }
      }
    }

    // console.log("treeChild:", treeChild);
    for (let i = 0; i < this.tree.length; i++) {
      for (let j = 0; j < treeChild.length; j++) {
        if (this.tree[i]['id'] == treeChild[j]['parentId']) {
          this.tree[i]['children'].push(treeChild[j])
        }
      }
    }

    // console.log("tree:", this.tree);
    return this.tree;
  }
}
