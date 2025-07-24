import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NavBarComponent} from "../../shared/nav-bar/nav-bar.component";

@Component({
  selector: 'app-main-container',
  standalone: true,
    imports: [
        MatButton,
        NavBarComponent
    ],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

}
