import {Component, OnInit} from '@angular/core';
// @ts-ignore
import * as angular from 'angular';
import {downgradeComponent} from '@angular/upgrade/static';


@Component({
  selector: 'view1',
  templateUrl: './view1.html'
})
export class View1Component implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

angular.module('myApp.view1', ['ngRoute', 'ngMessages']).directive(
  'myApp.view1',
  downgradeComponent({component: View1Component}) as angular.IDirectiveFactory
);
