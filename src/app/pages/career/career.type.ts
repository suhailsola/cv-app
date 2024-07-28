export interface Career {
  id: Number;
  user_id: Number;
  company: String;
  work_title: String;
  location: String;
  start_month: number;
  start_year: Number;
  end_month?: number;
  end_year?: Number;
  summary?: String;
  created_at: Date;
  updated_at: Date;
}
