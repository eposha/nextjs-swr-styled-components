import type { NextPage } from 'next';
import Link from 'next/link';
import { DateTime } from 'luxon';
import axios from 'axios';

import { FlCenterContainer, FlColumnCenterContainer } from 'styles/containers';

interface OnDemandProps {
  onDemand: string;
}

const OnDemand: NextPage<OnDemandProps> = ({ onDemand }) => {
  return (
    <>
      <div>
        <Link href="/example-isr-on-demand/revalidate">Go to revalidate page</Link>{' '}
      </div>
      <div>
        <Link href="/example-isr-on-demand/revalidate-with-swr">
          Go to revalidate page with swr
        </Link>{' '}
      </div>
      <FlColumnCenterContainer height="100vh">
        <FlCenterContainer>
          <div
            style={{
              fontSize: 48,
              color: 'green',
            }}
          >
            {onDemand}
          </div>
        </FlCenterContainer>
      </FlColumnCenterContainer>
    </>
  );
};

export default OnDemand;

export const getStaticProps = async () => {
  try {
    const {
      data: { currentTime: onDemand },
    } = await axios('http://localhost:3000/api/currentTime');

    return {
      props: {
        onDemand,
      },
    };
  } catch (e) {
    return {
      props: {
        onDemand: DateTime.now().toFormat(`HH 'hours' mm 'minutes and' ss 'seconds'`),
      },
    };
  }
};
