import { Component, Input } from '@angular/core';
import { Skills } from '../../../pages/skills/skills.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-card.component.html',
})
export class SkillCardComponent {
  @Input() data: Skills = {
    id: 1,
    user_id: 1,
    skill_name: 'Java',
    level: 'Fluent',
    is_language: true,
    description: 'A lot of things about this skill',
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
  };
}
