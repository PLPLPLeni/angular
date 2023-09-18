import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy, OnChanges {

  public showDetail: boolean = true;
  public compteur: number = 0;
  public imageSrc?: string;

  // Le "?" permets de préciser que la propiété est "nullable"
  public couleur?: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Header changes', changes);
  }

  ngOnDestroy(): void {
    console.log('Header destroy');
  }
  ngOnInit(): void {
    console.log('Header init');
    this.imageSrc = `https://placehold.co/20${this.compteur}x200/EEE/31343C`;
  }

  clicked(mouseEvent: MouseEvent) {
    console.log('clicked', mouseEvent);
    this.compteur++;
    this.imageSrc = `https://placehold.co/20${this.compteur}x200/EEE/31343C`
  }

  mouseOvered() {
    console.log('mouse overed');
  }
}
