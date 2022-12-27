import useSWR from 'swr';
import axios from 'axios';

export const REVALIDATE_EXAMPLE = 'revalidate-example';

const fetcher = async () => {
  const { data } = await axios.get('/api/currentTime');

  return data;
};

const useRevalidateExample = (options?: any) =>
  useSWR<{ currentTime: string }>('revalidate-example', fetcher, options);

export default useRevalidateExample;
