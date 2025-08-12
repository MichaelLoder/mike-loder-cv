import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { StrengthsComponent } from './components/strengths/strengths.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsService } from './services/skills.service';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { PDFDownloadService } from './services/pdf';
import { LoaderService } from './services/spinner.service';
import { FullScreenLoaderComponent } from './components/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import {
  GoogleTagManagerModule,
  GoogleTagManagerService,
} from 'angular-google-tag-manager';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CardComponent,
    StrengthsComponent,
    AchievementsComponent,
    FullScreenLoaderComponent,
    CommonModule,
  ],
  providers: [SkillsService, PDFDownloadService, LoaderService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  gtmService = inject(GoogleTagManagerService);
  ngOnInit(): void {
    this.gtmService.pushTag({
      event: 'page',
      pageName: 'mike-loder-cv',
    });
  }
  title = 'mike-loder-cv';
  pdfService = inject(PDFDownloadService);
}
