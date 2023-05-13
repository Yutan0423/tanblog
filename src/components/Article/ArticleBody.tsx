import parse from 'html-react-parser';
import { FC } from 'react';

type Props = {
  content: string;
};

const ArticleBody: FC<Props> = ({ content }) => {
  return <div>{parse(content)}</div>;
};

export default ArticleBody;
