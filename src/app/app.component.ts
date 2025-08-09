import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CardComponent,
    StrengthsComponent,
    AchievementsComponent,
  ],
  providers: [SkillsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mike-loder-cv';
}
