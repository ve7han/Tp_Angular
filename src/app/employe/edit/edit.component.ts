import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  employe: Employe;
  form: FormGroup;

  constructor(
    public employeService: EmployeService,
    private route : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeService.find(this.id).subscribe((data: any)=>{
      this.employe = data;
    });
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', Validators.required),
      salary: new FormControl('', [Validators.required]),
      service: new FormControl('', [Validators.required]),
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.employeService.update(this.id, this.form.value).subscribe(res => {
         console.log('Employe updated successfully!');
         this.router.navigateByUrl('employe/all');
    })
  }

}
