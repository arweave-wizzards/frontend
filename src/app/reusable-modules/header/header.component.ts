import { Component, OnInit} from '@angular/core';
import {WalletConnectService} from "../../shared-services/wallet-connect.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private walletConnectService: WalletConnectService,
  ) {
  }

  public ngOnInit(): void {
    this.walletConnectService.tryToConnectWalletOnInit();
  }

  public connectToWallet(): void {
    this.walletConnectService.connectWallet().then();
  }

}
