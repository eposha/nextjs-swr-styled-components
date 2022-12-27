import { FC, ReactNode } from 'react';

import * as UI from 'styles/layouts/MainLayout';

interface IMainLayout {
  children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return <UI.MainLayout>{children}</UI.MainLayout>;
};

export default MainLayout;
