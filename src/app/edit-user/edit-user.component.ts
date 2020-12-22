import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../share/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private router: Router,
    private route: ActivatedRoute, private userService: UserService) { }
  addForm: FormGroup;
  usercontact: User;

  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  ngOnInit() {
    const userId =  this.route.snapshot.paramMap.get('id');
    console.log("userId",userId)
    if (!userId) {
      alert('Invalid action.');
      this.router.navigate(['']);
      return;
    }
    this.addForm = this.formBuilder.group({
      id: [],
      age: ['', [Validators.required]],
      name: ['', Validators.required],
      nickName: ['', Validators.required],
      
    });
    const data = this.userService.getUserById(+userId);
    this.addForm.setValue(data);
  }

  isInvalid(name: string) {
    const control = this.addForm.get(name);
    return control!.invalid && control!.dirty;
  }

  

  onSubmit() {
    this.userService.update(this.addForm.value);
    this.router.navigate(['']);
  }

  onCancel() {
    this.router.navigate(['']);
  }
}
