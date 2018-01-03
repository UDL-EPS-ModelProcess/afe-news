export class ArticleListConfig {
    type = 'all';
    filters: {
      author?: string,
      limit?: number,
      offset?: number
    } = {};
}
