import { client } from "@/services/microcms/client";

const fetchArticles = async () => {
  return await client
    .get({
      endpoint: "blogs",
    })
    .then((res) => res);
};

export default async function Home() {
  const { contents } = await fetchArticles();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-8">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {contents.map((item: any) => <span key={item.id}>{item.title}</span>)}
      </div>
    </main>
  );
}
