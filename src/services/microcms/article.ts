import { MicroCMSQueries } from 'microcms-js-sdk';
import { Article } from '@/domains/article';
import { client } from './client';

export async function getArticles(queries?: MicroCMSQueries): Promise<Article[]> {
  return await client
    .get<{ contents: Article[] }>({
      endpoint: 'blogs',
      queries,
    })
    .then((res) => res.contents)
    .catch((e) => {
      console.error(e);
      return [];
    });
}

export async function getArticle(
  contentId: string,
  queries?: MicroCMSQueries,
): Promise<Article | null> {
  return await client
    .get<Article>({
      endpoint: 'blogs',
      contentId,
      queries,
    })
    .then((res: Article) => res)
    .catch((e) => {
      console.error(e);
      return null;
    });
}
