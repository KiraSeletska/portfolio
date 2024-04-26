import { Component } from '@angular/core';
import { TetrahedronComponent } from '../tetrahedron/tetrahedron.component';
import { CommonModule } from '@angular/common';
import { IcosahedronComponent } from '../icosahedron/icosahedron.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, IcosahedronComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
