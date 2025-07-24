import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavBarComponent} from "../shared/nav-bar/nav-bar.component";
import {MainContainerComponent} from "./main-container/main-container.component";
import {ColectionsContainerComponent} from "./colections-container/colections-container.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    MainContainerComponent,
    ColectionsContainerComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
