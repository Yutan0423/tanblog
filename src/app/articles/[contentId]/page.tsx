import { ArticleBody } from "@/components/Article";
import { getArticle } from "@/services/microcms/article";

type Props = {
  params: { contentId: string }
}

export default async function Home({ params }: Props) {
  const article = await getArticle(params.contentId);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-8">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <ArticleBody content={article?.content || ''} />
      </div>
    </main>
  );
}
