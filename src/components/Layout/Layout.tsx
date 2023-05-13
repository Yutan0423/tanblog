import { FC, Fragment } from 'react';
import Footer from './_internal/Footer';
import Header from './_internal/Header';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
  <Fragment>
    <Header />
    <div>{children}</div>
    <Footer />
  </Fragment>
);

export default Layout;
