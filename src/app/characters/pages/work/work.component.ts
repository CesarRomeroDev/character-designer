import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class WorkComponent {

}
