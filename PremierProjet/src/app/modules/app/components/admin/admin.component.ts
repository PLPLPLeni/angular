import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  public oirehgouiergherouigheroigheroigjeroigerhjgoierhjgoiergjeroighjeroighgregergergergerererererererererererererererererererererererererererererererererererererererererererererererererererererererererererererererererererererererererereroighergoier?: string;

  public countHasChanged(count: number): void {
    console.log('Count new value', count);
  }
}
