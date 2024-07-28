import { Component, Input, OnInit } from '@angular/core';
import { SkillCardComponent } from '../../components/skill/skill-card/skill-card.component';
import { CookieService } from 'ngx-cookie-service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SkillsService } from '../../services/skills/skills.service';
import { Skills } from './skills.type';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillCardComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit {
  @Input() data!: Skills[];
  cookie: string | null = null;
  headers: HttpHeaders;
  skillForm!: FormGroup;

  constructor(
    private cookieService: CookieService,
    private formBuilder: FormBuilder,
    private SkillsService: SkillsService,
  ) {
    this.cookie = this.cookieService.get('token');
    this.headers = new HttpHeaders();
    if (this.cookie) {
      this.headers = new HttpHeaders({
        Authorization: `Bearer ${this.cookie}`,
      });
    }

    this.skillForm = this.formBuilder.group({
      skill_name: ['', Validators.required],
      level: [''],
      is_language: [false, Validators.required],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.fetchSkill();
  }

  fetchSkill() {
    if (this.cookie) {
      this.SkillsService.getSkills({ headers: this.headers }).subscribe(
        (res: any) => {
          console.log(res.data);
          if (res.data) {
            this.data = res.data;
          }
        },
      );
    }
  }

  onSubmit() {
    if (this.skillForm.valid) {
      const skillData = this.skillForm.value;

      if (this.data) {
        this.SkillsService.createSkills(skillData, {
          headers: this.headers,
        }).subscribe((res: any) => {
          console.log(res.data);
          this.fetchSkill();
        });
      }
    }
  }
}
