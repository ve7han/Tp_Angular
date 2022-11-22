import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class VueComponent implements OnInit {


  id: number;
  employe: Employe;

  constructor(
    public employeService: EmployeService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeService.find(this.id).subscribe((data: any)=>{
      this.employe = data;
    });
  }
}
