import { ArticleCard } from '@/components/Article';
import { Spacer } from '@/components/Util/Spacer';
import { REVALIDATE } from '@/constants/revalidate';
import { getArticles } from '@/services/microcms/article';

export const revalidate = REVALIDATE;

export default async function Home() {
  const articles = await getArticles();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-8">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <div className="grid grid-cols-1 gap-4">
          {articles.map((content) => (
            <ArticleCard
              key={content.id}
              contentId={content.id}
              title={content.title}
              thumbnailUrl={content.eyecatch.url}
              category={content.category.name}
              createdAt={content.createdAt}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
