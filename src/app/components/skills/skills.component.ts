import {
  Component,
  computed,
  inject,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { SkillsService } from '../../services/skills.service';
import { PDFDownloadService } from '../../services/pdf';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillService = inject(SkillsService);
  pdfService = inject(PDFDownloadService);

  private viewModel = computed(() => {
    return {
      skills: this.skillService.vm().skills,
      selectedSkills: this.skillService.vm().selectedSkills,
      isPdf: this.pdfService.isPdf,
    };
  });

  get vm() {
    return this.viewModel();
  }

  isSelected(skill: string) {
    return this.vm.selectedSkills().includes(skill);
  }

  clickSkill(skill: string) {
    if (!this.vm.selectedSkills().includes(skill)) {
      this.vm.selectedSkills.set([...this.vm.selectedSkills(), skill]);
    } else {
      this.vm.selectedSkills.set(
        this.vm.selectedSkills().filter((s) => s !== skill),
      );
    }
  }
}
