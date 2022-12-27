import Link from 'next/link';

import { useCountStore } from 'src/store/countExampleStore';
import { FlCenterContainer, FlColumnCenterContainer } from 'styles/containers';

const Count = () => {
  const { data: count, mutate } = useCountStore();

  const handlePlus = () => mutate((count || 0) + 1, false);
  const handleMinus = () => mutate((count || 0) - 1, false);

  return (
    <>
      <Link href="/example-swr-store/count-rest" style={{ fontSize: 24, marginRight: 40 }}>
        Go to count reset
      </Link>
      <Link href="/example-swr-store/count-result" style={{ fontSize: 24 }}>
        Go to count results
      </Link>

      <FlColumnCenterContainer height="100vh">
        <FlCenterContainer>
          <div style={{ marginBottom: 48, fontSize: 48 }}>{count}</div>
        </FlCenterContainer>
        <FlCenterContainer width="390px" style={{ justifyContent: 'space-between' }}>
          <button style={{ width: 100, fontSize: 48 }} onClick={handleMinus}>
            - 1
          </button>
          <button style={{ width: 100, fontSize: 48 }} onClick={handlePlus}>
            + 1
          </button>
        </FlCenterContainer>
      </FlColumnCenterContainer>
    </>
  );
};

export default Count;
