import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public Id:any;
  constructor(private activateRout:ActivatedRoute) { 
    
  }

  ngOnInit(): void 
  {
    // let id=this.activateRout.snapshot.paramMap.get('id');
    this.activateRout.params.subscribe((paramsData)=>
    {
      this.Id=paramsData.id;
    })
   
  }

}
