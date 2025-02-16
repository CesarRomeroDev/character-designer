import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class WelcomeComponent {

}
