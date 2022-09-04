import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

import { BlogContractService } from 'src/app/shared-services/blog-contract.service';
import { WalletConnectService } from 'src/app/shared-services/wallet-connect.service';

import {PostFormData} from "./post-form-data.interface";

@Component({
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.scss']
})
export class WritePostComponent{

  @ViewChild('form') public readonly loginForm: NgForm;


  public blogContractService: BlogContractService;

  // portfel: WalletConnectService;


  constructor(
    private portfel: WalletConnectService
  ) {
    this.blogContractService = new BlogContractService('use_wallet')

  }

  public get getFormData(): PostFormData {
    return this.loginForm.value;
  }







  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    let dane = this.getFormData;

    let zmienna = this.blogContractService.addPost(this.portfel.userAuthState.address, dane.content, dane.title, dane.category);
    setTimeout(() => {
      zmienna().then(x => {

        // window.open(`/single-post/${id}`, '_blank');});
      })
    }, 1000);

    // this.blogContractService.post('niaEQjYytHzUDqeicQ2nZTPwGT3j8qwELWVlwZbnAkU');
  
    this.loginForm.resetForm();


    //window.open(`/single-post/${id}`, '_blank');

  }

}
