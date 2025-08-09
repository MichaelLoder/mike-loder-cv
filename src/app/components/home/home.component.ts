import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { HttpClient } from '@angular/common/http';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-home',
  imports: [AboutMeComponent, SkillsComponent, ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {}
