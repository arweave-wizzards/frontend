import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BlogContractService } from 'src/app/shared-services/blog-contract.service';
import { WalletConnectService } from 'src/app/shared-services/wallet-connect.service';

import { PostFormData } from './post-form-data.interface';

@Component({
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.scss'],
})
export class WritePostComponent {

  @ViewChild('form') public readonly loginForm: NgForm;

  constructor(
    private walletConnectService: WalletConnectService,
    public blogContractService: BlogContractService,
  ) {
  }

  public get getFormData(): PostFormData {
    return this.loginForm.value;
  }

  public onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const dane: PostFormData = this.getFormData;
    let addPost = this.blogContractService.addPost(this.walletConnectService.userAuthState.address, dane.content, dane.title, dane.category);
    addPost().then(
      () => this.loginForm.resetForm(),
    );
  }
}
