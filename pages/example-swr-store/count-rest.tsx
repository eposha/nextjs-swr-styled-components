import Link from 'next/link';
import { mutate } from 'swr';

import { COUNT_EXAMPLE } from 'src/store/countExampleStore/useCountStore';
import { FlCenterContainer, FlColumnCenterContainer } from 'styles/containers';

const CountMultiply = () => {
  const handleReset = () => mutate(COUNT_EXAMPLE, () => 5, false);

  return (
    <>
      <Link href="/example-swr-store/count" style={{ fontSize: 24, marginRight: 40, color: 'red' }}>
        Go to count
      </Link>
      <Link href="/example-swr-store/count-result" style={{ fontSize: 24, color: 'red' }}>
        Go to count results
      </Link>

      <FlColumnCenterContainer height="100vh">
        <FlCenterContainer width="390px" style={{ justifyContent: 'space-between' }}>
          <button
            style={{
              width: 150,
              fontSize: 48,
              color: 'red',
              background: '#fff',
              cursor: 'pointer',
            }}
            onClick={handleReset}
          >
            Reset
          </button>
        </FlCenterContainer>
      </FlColumnCenterContainer>
    </>
  );
};

export default CountMultiply;
