import { Component } from '@angular/core';
import { HelloworldService } from '../../services/helloworld.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [HelloworldService]
})
export class HeaderComponent {
  public nomUtilisateur: string = 'Administrateur';

  constructor(private helloworldService: HelloworldService) {
  }
}
