import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  employes: Employe[] = [];

  constructor(public employeService: EmployeService) { }

  ngOnInit(): void {
    this.employeService.getAll().subscribe((data:any)=>{
      this.employes = data;
      console.log(this.employes);
    })
  }

  deletePost(id:number){
    this.employeService.delete(id).subscribe(res => {
         this.employes = this.employes.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }

}
