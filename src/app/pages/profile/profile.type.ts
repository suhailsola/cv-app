export interface Profile {
  id: Number;
  user_id: Number;
  firstName: String;
  lastName: String;
  birth_date: Date;
  address: String;
  gender?: String;
  created_at: Date;
  updated_at: Date;
  introduction?: String;
}
