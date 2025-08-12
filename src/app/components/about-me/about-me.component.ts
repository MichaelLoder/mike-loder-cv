import { Component, computed, inject } from '@angular/core';
import { PDFDownloadService } from '../../services/pdf';
import { LoaderService } from '../../services/spinner.service';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  standalone: true,
})
export class AboutMeComponent {
  private pdfDownloader = inject(PDFDownloadService);
  private loaderService = inject(LoaderService);
  gtmService = inject(GoogleTagManagerService);

  private viewModel = computed(() => {
    return {
      isPdf: this.pdfDownloader.isPdf,
    };
  });

  get vm() {
    return this.viewModel();
  }

  onDownload() {
    this.gtmService.pushTag({
      event: 'cv-download',
      pageName: 'mike-loder-cv',
    });
    this.loaderService.show();
    this.pdfDownloader.isPdf.set(true);
    setTimeout(() => {
      this.pdfDownloader.downloadPDF();
    }, 2000);
  }
}
