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

    userWallet: ArWallet;

    // contractId: string = 't3Kf6bG-DO8A2g6hYebEbgJIs0nJ1M-u7NvYrwx0QPw';
    contractId: string = 'b84eo0qYmaweXJYGsnctbnb87SugTcEGuFlfjGGKh4Y';
    
    //2. initialising contract instance
    contract: Contract<BlogState>; //contract to load


    constructor(userWallet: ArWallet) {
        const init = async() => {
            //3. warp adding
            const warp = WarpFactory.forMainnet();

            //4. walletAddress getting from userWallet json
            const walletAddress = await warp.arweave.wallets.jwkToAddress(this.userWallet);
            //5. connecting userWallet to a contract
            this.contract = warp.contract<BlogState>(this.contractId).connect(this.userWallet);

            //6. reading state of contract
            let stateOfContract = (await this.contract.readState()).cachedValue.state;

        }
        init();
    }



    getPosts(address: string): any{ //address is necessary but we deployed it to contract and doesnt have time to change :CCC
        return async() => {
            const {result} = await this.contract.viewState({
                function: 'readPost',
                author: address
              })
              return {result};
              
        } 
        

    }

    addPost(address: string,content: string, title: string, category: string): any{ //address is necessary but we deployed it to contract and doesnt have time to change :CCC
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