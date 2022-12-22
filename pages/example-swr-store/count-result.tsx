import Link from 'next/link';
import { useCountStore } from 'src/store/countExampleStore';
import { FlColumnCenterContainer, FlCenterContainer } from 'styles/containers';

const CountResult = () => {
  const { data: count } = useCountStore({ fallbackData: 5 });

  return (
    <>
      <Link
        href='/example-swr-store/count'
        style={{ fontSize: 24, color: 'green', marginRight: 40 }}>
        Go to count calculating
      </Link>
      <Link
        href='/example-swr-store/count-rest'
        style={{ fontSize: 24, color: 'green' }}>
        Go to count reset
      </Link>
      <FlColumnCenterContainer height='100vh'>
        <FlCenterContainer>
          <div style={{ marginBottom: 48, fontSize: 48, color: 'green' }}>
            {count}
          </div>
        </FlCenterContainer>
      </FlColumnCenterContainer>
    </>
  );
};

export default CountResult;
