import { computed, inject, Injectable, signal } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { LoaderService } from './spinner.service';

@Injectable({ providedIn: 'root' })
export class PDFDownloadService {
  private loaderService = inject(LoaderService);

  isPdf = signal(false);

  private viewModel = computed(() => {
    return {
      isPdf: this.isPdf,
    };
  });

  downloadPDF() {
    const DATA = document.getElementById('cv') as HTMLElement;

    html2canvas(DATA, { scale: 1.5 }) // ↓ lower scale from 2 → 1.5
      .then((canvas) => {
        // Convert canvas to JPEG with compression
        const imgData = canvas.toDataURL('image/jpeg', 0.75); // JPEG at 75% quality

        // PDF A4 width in mm
        const pdfWidth = 210;

        // Convert px → mm
        const pxToMm = 0.264583;
        const imgWidth = canvas.width * pxToMm;
        const imgHeight = canvas.height * pxToMm;

        // Scale height proportionally to fit A4 width
        const scaleFactor = pdfWidth / imgWidth;
        const scaledHeight = imgHeight * scaleFactor;

        // Create PDF with custom height
        const pdf = new jsPDF('p', 'mm', [pdfWidth, scaledHeight]);

        // Add the image as JPEG instead of PNG
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, scaledHeight);

        pdf.save('mike-loder-cv.pdf');
        this.isPdf.set(false);
        this.loaderService.hide();
      });
  }
}
