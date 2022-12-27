import Link from 'next/link';

import { useRevalidateExample } from 'src/api/revalidateExample';
import { FlCenterContainer, FlColumnCenterContainer } from 'styles/containers';

const Revalidate = () => {
  const { data } = useRevalidateExample();
  const { currentTime: onDemand } = data || {};

  return (
    <>
      {' '}
      <div>
        <Link href="/example-isr-on-demand">Go to result page</Link>
      </div>
      <div>
        <Link href="/example-isr-on-demand/revalidate">Go to revalidate page</Link>{' '}
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

export default Revalidate;
