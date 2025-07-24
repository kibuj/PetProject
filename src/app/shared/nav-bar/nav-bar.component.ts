import { Component } from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatAnchor,
    MatButton
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
