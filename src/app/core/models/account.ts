export class Account {
  id: string;
  media_count: number;
  followers_count: number;
  media: {
    data: [{
      id: string;
    }]
  };
  biography: string;
  name: string;
  profile_picture_url: string;
  username: string;
  email: string;
}
