import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-clinent',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterModule],
  templateUrl: './layout-clinent.component.html',
  styleUrl: './layout-clinent.component.scss'
})
export class LayoutClinentComponent {

}
