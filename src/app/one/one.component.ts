import { Component, OnInit } from '@angular/core';
import { ListServiceService} from '../list-service.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {


  constructor( private listService: ListServiceService) { }

  ngOnInit() {
    this.listService.getData();
  }

}
