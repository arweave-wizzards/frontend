import { ArWallet, Contract, WarpFactory } from "warp-contracts";
import { Injectable } from '@angular/core';
import { BlogState } from "../contracts/model/blog-state";
import { Post } from "../shared-interfaces/post.interface";
import { ContractResult } from "../contracts/model/contract-result";
import { async } from "@angular/core/testing";
@Injectable({
    providedIn: 'root'
})
export class BlogContractService {
    public userWallet: ArWallet;
    public contractId: string = 'b84eo0qYmaweXJYGsnctbnb87SugTcEGuFlfjGGKh4Y';
    public contract: Contract<BlogState>;

    constructor() {
          const warp = WarpFactory.forMainnet();
          this.contract = warp.contract<BlogState>(this.contractId).connect(this.userWallet);
    }

    public getPosts(address: string): () => Promise<{result: any}>{
        return async() => {
            const {result} = await this.contract.viewState({
                function: 'readPost',
                author: address
              })
              return {result};
        }
    }

    public addPost(address: string,content: string, title: string, category: string): any{ //address is necessary, but we deployed it to contract and doesn't have time to change :CCC
        return async() => {
        await this.contract.writeInteraction({
            function: 'addPost',
            content: content,
            title: title,
            category: category
          });
        }

    }















}
