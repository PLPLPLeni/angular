import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-create-update-voyage',
  templateUrl: './create-update-voyage.component.html',
  styleUrls: ['./create-update-voyage.component.scss']
})
export class CreateUpdateVoyageComponent implements OnInit {
  public id?: string | null;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    })
  }
}
