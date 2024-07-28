export interface Skills {
  id: number;
  user_id: number;
  skill_name: string;
  level?: Languang_Level | '';
  is_language: boolean;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
}

type Languang_Level = 'Basic' | 'Intermediate' | 'Fluent';
