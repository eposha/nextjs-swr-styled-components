import useSWRStore from '../useSWRStore';

export const COUNT_EXAMPLE = 'count-example';

const useCountStore = (options?: any) =>
  useSWRStore<number, unknown>(COUNT_EXAMPLE, options);

export default useCountStore;
