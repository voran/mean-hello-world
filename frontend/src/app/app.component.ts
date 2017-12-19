import { Component } from '@angular/core';
import { NerdService } from './nerd.service';
import { Nerd } from './nerd';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private title: string = 'test frontend';
  private allNerds: Observable<Nerd[]>;

  constructor(private nerds:NerdService) {}

  getAllNerds() {
    this.allNerds = this.nerds.all();
  }
}
