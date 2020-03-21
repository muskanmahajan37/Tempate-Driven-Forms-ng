import { Component } from '@angular/core';
import { User } from './models/user';
import { EnrollmentService } from './services/enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topicHaveError=true;
  formSubmitted= false;
  errorMsg='';

  constructor(private enrollmentService:EnrollmentService){}
  topics:string[]=[
    'Angular',
    'React',
    'View'
  ];
 
  userModel:User ={
    name: null,
    email: null,
    phone: null,
    topic: null,
    timePreference: null,
    subscribe: false
  };
  
  // below is another way to set data in user
  // userModel= new User('Gursewak', 'exz', 784, 'Angular', 'Evening', true);
  validateTopic(value:string){
    if (value == 'default') {
      this.topicHaveError=true;
    } else {
      this.topicHaveError=false;
    }
  }

  onSubmit(){
    this.formSubmitted=true;
    console.log(this.userModel);
    this.enrollmentService.enroll(this.userModel).subscribe( 
      res => console.log(res),
      error=> this.errorMsg = error.statusText // saving error
      );
  }

  newForm(){
    this.formSubmitted=false;
  }
}
