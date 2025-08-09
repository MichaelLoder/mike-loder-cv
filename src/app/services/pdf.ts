import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export class PDFDownloadService {
  downloadPDF() {
    const DATA = document.getElementById('cv') as HTMLElement;

    html2canvas(DATA, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      // Convert pixel dimensions to mm (1 px = 0.264583 mm approx)
      const pxToMm = 0.264583;
      const imgWidth = canvas.width * pxToMm;
      const imgHeight = canvas.height * pxToMm;

      // Create PDF with custom page size to fit the image exactly
      const pdf = new jsPDF({
        unit: 'mm',
        format: [imgWidth, imgHeight],
      });

      // Add image at 0,0 with original pixel size converted to mm
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

      pdf.save('full-size-content.pdf');
    });
  }
}
