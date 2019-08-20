import { Component, OnInit } from '@angular/core';

import {Kml} from '../../decorators.factorties';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
@Kml({
  name: "TEST_COMPONENT"
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
