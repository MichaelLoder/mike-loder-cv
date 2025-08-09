import { Component, inject } from '@angular/core';
import { PDFDownloadService } from '../../services/pdf';

@Component({
  selector: 'app-about-me',
  imports: [],
  providers: [PDFDownloadService],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  standalone: true,
})
export class AboutMeComponent {
  private pdfDownloader = inject(PDFDownloadService);

  onDownload() {
    this.pdfDownloader.downloadPDF();
  }
}
