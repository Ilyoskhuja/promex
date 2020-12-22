import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../share/user.model';
import { UserService } from '../user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }
  addForm: FormGroup;
  @Output()
  createUsercontact = new EventEmitter<User>();

  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      age: ['', [Validators.required]],
      name: ['', Validators.required],
      nickName: ['', Validators.required],
      employee:true,
      
    });
  }

  isInvalid(name: string) {
    const control = this.addForm.get(name);
    return control!.invalid && control!.dirty;
  }



  onSubmit() {
    this.userService.create(this.addForm.value);

    this.router.navigate(['']);
  }

  onCancel() {
    this.router.navigate(['']);
  }

}
