import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FlowbiteService } from '../../../services/flowbite.service';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class WelcomeComponent implements OnInit{

  constructor(
    private flowbiteService: FlowbiteService
  ) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      flowbite = initFlowbite();
    });
  }
}
