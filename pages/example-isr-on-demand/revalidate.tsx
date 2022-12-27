import axios from 'axios';
import Link from 'next/link';

import { FlCenterContainer, FlColumnCenterContainer } from 'styles/containers';

const Revalidate = () => {
  const handleRevalidate = async () => {
    await axios('/api/revalidate?secret=secretPath&path=/example-isr-on-demand');
    await axios(
      '/api/revalidate?secret=secretPath&path=/example-isr-on-demand/revalidate-with-swr',
    );
  };

  return (
    <>
      <div>
        <Link href="/example-isr-on-demand">Go to result page</Link>
      </div>
      <div>
        <Link href="/example-isr-on-demand/revalidate-with-swr">
          Go to revalidate page with swr
        </Link>
      </div>{' '}
      <FlColumnCenterContainer height="100vh">
        <FlCenterContainer width="390px" style={{ justifyContent: 'space-between' }}>
          <button
            style={{
              fontSize: 48,
              color: 'green',
              background: '#fff',
              cursor: 'pointer',
            }}
            onClick={handleRevalidate}
          >
            Revalidate
          </button>
        </FlCenterContainer>
      </FlColumnCenterContainer>
    </>
  );
};

export default Revalidate;
