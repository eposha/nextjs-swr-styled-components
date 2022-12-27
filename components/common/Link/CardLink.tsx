import { FC } from 'react';

import * as UI from 'styles/link';

interface ICardLink {
  href: string;
  h2Text: string;
  text: string;
  target?: string;
}

const CardLink: FC<ICardLink> = ({ href, h2Text, text, target }) => {
  return (
    <UI.CardLink href={href} target={target} rel="noopener noreferrer">
      <UI.CardH2>
        {h2Text} <UI.CardSpan>-&gt;</UI.CardSpan>
      </UI.CardH2>
      <UI.CardP>{text}</UI.CardP>
    </UI.CardLink>
  );
};

export default CardLink;
