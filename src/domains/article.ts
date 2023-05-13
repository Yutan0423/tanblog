import { MicroCMSListContent } from "microcms-js-sdk";

export type Article = MicroCMSListContent & {
  title: string
  content: string
  eyecatch: Eyecatch
  category: Category
  slug: string
}

export type Eyecatch = {
  url: string
  height: number
  width: number
}

export type Category = MicroCMSListContent & {
  name: string
}