import useSWRImmutable from 'swr/immutable';

const fetcher = () => null;

const useSWRStore = <T, K>(key: string | null, options?: IOptionSWR) =>
  useSWRImmutable<T | null>(key, fetcher, {
    ...(options ?? {}),
  });

export default useSWRStore;
