import { Component, Input } from "@angular/core";

@Component({
  selector: "progress-bar",
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  @Input("progress") progress: number;
  @Input("color") color: string;

  constructor() {
    // Default configs
    this.progress = 0;
    this.color = "#488aff";
  }
}
