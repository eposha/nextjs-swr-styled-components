import useSWRStore from '../useSWRStore';

export const COUNT_EXAMPLE = 'count-example';

const useCountStore = (options?: any) =>
  useSWRStore<number>(COUNT_EXAMPLE, { fallbackData: 5, ...options });

export default useCountStore;
