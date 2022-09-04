import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {PostFormData} from "./post-form-data.interface";

@Component({
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.scss']
})
export class WritePostComponent{

  @ViewChild('form') public readonly loginForm: NgForm;

  constructor(
  ) {
  }

  public get getFormData(): PostFormData {
    return this.loginForm.value;
  }

  public onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.getFormData);
    this.loginForm.resetForm();
    const id: number = 1;
    window.open(`/single-post/${id}`, '_blank');
  }

}
