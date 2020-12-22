import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MainService } from '../main.service';

export interface DialogData {
    password: string;
    name: string;
}




@Component({
    selector: 'dialog-auth-dialog',
    templateUrl: 'auth-dialog.html',
})
export class DialogOverviewExampleDialog {
  
    constructor(

        private fb: FormBuilder,
        public main: MainService,
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        
         }

    onNoClick(): void {
        this.dialogRef.close();
    }
    

    signIn() {        
        if (this.data.name !== "" && this.data.password !== "")
            this.main.signin(this.data).subscribe(res => {
                console.log("res:", res);
                if (res.status == 200)
                    this.dialogRef.close();
            },
             err => console.log('HTTP Error', err))
    }
}
