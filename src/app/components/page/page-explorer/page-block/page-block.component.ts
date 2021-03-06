import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Web3Service } from '../../../../service/eth/web3.service';
import { Web3Interfaces } from '../../../../service/eth/web3-interface';


@Component({
  selector: 'app-page-block',
  templateUrl: './page-block.component.html',
  styleUrls: ['./page-block.component.scss'],
  providers: [Web3Service]
})
export class PageBlockComponent implements OnInit {

  public get blockNumber(): number | string {
    const block = this.router.routerState.snapshot.url.split('/');

    if (block.length >= 3) {
      return block[3];
    }

    return block[3];
  }
  public block: Web3Interfaces.IBlock;

  constructor(private web3Service: Web3Service,
              private router: Router) { }

  ngOnInit() {
    this.web3Service
        .getBlock(this.blockNumber)
        .then(block => this.block = block);
  }

}
