import type { NextPage } from 'next';
import { DateTime } from 'luxon';
import { SWRConfig } from 'swr';
import axios from 'axios';

import { Revalidate } from 'components/features/RevalidateExample';

interface OnDemandProps {
  fallback: { 'revalidate-example': string };
}

const RevalidateWithSWR: NextPage<OnDemandProps> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Revalidate />
    </SWRConfig>
  );
};

export default RevalidateWithSWR;

export const getStaticProps = async () => {
  try {
    const {
      data: { currentTime: onDemand },
    } = await axios('http://localhost:3000/api/currentTime');

    return {
      props: {
        fallback: {
          'revalidate-example': { currentTime: onDemand },
        },
      },
    };
  } catch (e) {
    return {
      props: {
        fallback: {
          'revalidate-example': {
            currentTime: DateTime.now().toFormat(`HH 'hours' mm 'minutes and' ss 'seconds'`),
          },
        },
      },
    };
  }
};
