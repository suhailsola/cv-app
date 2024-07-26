export interface Edu {
  id: Number;
  user_id: Number;
  institute: String;
  certificate_name: String;
  level: String;
  start_year: Number;
  end_year?: Number;
  summary?: String;
  created_at: Date;
  updated_at: Date;
}
