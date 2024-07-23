import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-404',
  templateUrl: './404.component.html',
  imports: [RouterModule, ButtonComponent],
  standalone: true,
})
export class FourOhFourComponent {}
