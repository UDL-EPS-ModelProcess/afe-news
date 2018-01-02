import { Profile } from './profile.models';

export class Article {
    slug: string;
    title = '';
    description = '';
    body = '';
    type = '';
    createdAt: string;
    updatedAt: string;
    author: Profile;
}
