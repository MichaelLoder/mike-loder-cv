import { HttpClient } from '@angular/common/http';
import {
  computed,
  inject,
  Injectable,
  signal,
  WritableSignal,
} from '@angular/core';
import { take } from 'rxjs';
import { Experience } from '../types/experience-type';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  httpClient = inject(HttpClient);
  skills: WritableSignal<string[]> = signal<string[]>([]);
  experience: WritableSignal<Experience[]> = signal<Experience[]>([]);
  selectedSkills: WritableSignal<string[]> = signal<string[]>([]);

  constructor() {
    this.getSKillData();
    this.getExperience();
  }

  private viewmodel = computed(() => {
    return {
      skills: this.skills,
      experience: this.experience,
      selectedSkills: this.selectedSkills,
    };
  });

  getSKillData() {
    return this.httpClient
      .get<string[]>('assets/data/skills.json')
      .pipe(take(1))
      .subscribe((data) => {
        this.skills.set(data);
      });
  }

  getExperience() {
    return this.httpClient
      .get<Experience[]>('assets/data/experience.json')
      .pipe(take(1))
      .subscribe((data) => {
        this.experience.set(data);
      });
  }

  vm() {
    return this.viewmodel();
  }
}
