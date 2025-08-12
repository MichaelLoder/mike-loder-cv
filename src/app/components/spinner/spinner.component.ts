// full-screen-loader.component.ts
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../../services/spinner.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-full-screen-loader',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class FullScreenLoaderComponent {
  visible$: Observable<boolean>;

  constructor(private loader: LoaderService) {
    this.visible$ = this.loader.visible$;
  }
}
