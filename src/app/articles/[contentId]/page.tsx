import { ArticleBody } from '@/components/Article';
import { Profile } from '@/components/Profile';
import { Spacer } from '@/components/Util/Spacer';
import { REVALIDATE } from '@/constants/revalidate';
import { getArticle } from '@/services/microcms/article';

export const revalidate = REVALIDATE;

type Props = {
  params: { contentId: string };
};

export default async function Home({ params }: Props) {
  const article = await getArticle(params.contentId);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-8">
      <div className="z-10 w-full max-w-5xl font-mono text-sm">
        <ArticleBody content={article?.content || ''} />
        <Spacer size={16} />
        <Profile />
      </div>
    </main>
  );
}
