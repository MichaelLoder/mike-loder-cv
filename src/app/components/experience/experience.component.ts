import {
  Component,
  computed,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { Experience } from '../../types/experience-type';
import { SkillsService } from '../../services/skills.service';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  providers: [JsonPipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  standalone: true,
})
export class ExperienceComponent {
  private filteredExperience: WritableSignal<Experience[]> = signal<
    Experience[]
  >([]);

  skillService = inject(SkillsService);

  private viewModel = computed(() => {
    return {
      experience: this.skillService
        .vm()
        .experience()
        .filter((e) =>
          e.skillUsed.some((s) =>
            this.skillService.vm().selectedSkills().includes(s)
          )
        ),
      fullExperience: this.skillService.vm().experience(),
    };
  });

  isSelected(skill: string) {
    return this.skillService.vm().selectedSkills().includes(skill);
  }

  get vm() {
    return this.viewModel();
  }

  get myExperience() {
    return this.vm.experience.length > 0
      ? this.vm.experience
      : this.vm.fullExperience;
  }
}
