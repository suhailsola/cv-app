import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton.component.html',
})
export class SkeletonComponent {
  @Input() isLoading = true;
  @Input() lines = 3;
  @Input() height = 'h-6';
  @Input() margin = '';
  @Input() width = '';
  @Input() maxWidth = 'max-w-xl';
}
