import {Injectable} from '@angular/core';
import {UserAuthState} from "../shared-interfaces/user-auth-state.interface";

@Injectable({
  providedIn: 'root'
})
export class WalletConnectService {

  public walletConnected: boolean = false;
  public userAuthState: UserAuthState = {
    address: '',
    contractAddress: '',
  };

  constructor() {
  }

  public tryToConnectWalletOnInit(): void {
    window.addEventListener("arweaveWalletLoaded",
      async () => {
        this.walletConnected = true;
        this.loadAddress();
      }
    );
    window.addEventListener("walletSwitch", () => {
      this.walletConnected = true;
      this.loadAddress();
    });
  }

  public async loadAddress(): Promise<void> {
    if (!(window as any).arweaveWallet) {
      throw new Error('Can not get address without arweaveWallet');
    } else {
      this.userAuthState.address = await (window as any).arweaveWallet.getActiveAddress();
      this.walletConnected = true;
    }
    console.log(this.userAuthState.address);
  }

  public async connectWallet(): Promise<void>{
    try {
      await this.loadAddress();
    } catch (e) {
      console.error(e);
      if (!this.userAuthState.address) {
        console.warn('Failed to get address. Connecting to ArConnect');
        await (window as any).arweaveWallet.connect([
          'ACCESS_ADDRESS',
          'ACCESS_ALL_ADDRESSES',
          'SIGN_TRANSACTION',
        ]);
        await this.loadAddress();
      }
    }
  }
}
