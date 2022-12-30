import useSWRImmutable from 'swr/immutable';

const useSWRStore = <T>(key: string | null, options?: IOptionSWR) =>
  useSWRImmutable<T | null>(key, null, {
    ...(options ?? {}),
  });

export default useSWRStore;
