import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  taxForm:FormGroup;
  employeeForm:FormGroup;
  insuranceForm:FormGroup;
  uploadImg:String="assets/image/upload.png";
  downloadImg="assets/image/download.png";
  tickImage="assets/image/tick.jpg";
  errorImage="assets/image/error.png";
  constructor(private fb:FormBuilder) { }
 

  ngOnInit(): void {
 
    this.employeeForm=this.fb.group(
      { employeeInfo:['',[Validators.required]],
        socialSecurity:['',[Validators.required]] }
    )

    this.taxForm=this.fb.group( 
      {employeeCF:['',[Validators.required]],
    employeeTF:['',[Validators.required]],
  employerBC:['',[Validators.required]]})

    this.insuranceForm=this.fb.group(
     {healthIC:['',[Validators.required]],
    disabilityIC:['',[Validators.required]],
  dentalAndVision:['']}
    )
  }



  






  



}
