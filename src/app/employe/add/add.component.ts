import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup;

  constructor(
    public employeService: EmployeService,
    private router: Router
  ) { }

  ngOnInit(): void {
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
    this.employeService.create(this.form.value).subscribe(res => {
         console.log('Employe added successfully!');
         this.router.navigateByUrl('employe/all');
    })
  }

}
