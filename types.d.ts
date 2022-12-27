interface IOptionSWR {
  /**
   *  error retry interval in milliseconds
   *  @defaultValue 5000
   */
  errorRetryInterval: number;
  /** max error retry count */
  errorRetryCount?: number;
  /**
   * timeout to trigger the onLoadingSlow event in milliseconds
   * @defaultValue 3000
   */
  loadingTimeout: number;
  /**
   * only revalidate once during a time span in milliseconds
   * @defaultValue 5000
   */
  focusThrottleInterval: number;
  /**
   * dedupe requests with the same key in this time span in milliseconds
   * @defaultValue 2000
   */
  dedupingInterval: number;
  /**
   *  @link https://swr.vercel.app/docs/revalidation
   *  * Disabled by default: `refreshInterval = 0`
   *  * If set to a number, polling interval in milliseconds
   *  * If set to a function, the function will receive the latest data and should return the interval in milliseconds
   */
  refreshInterval?: number | ((latestData: Data | undefined) => number);
  /**
   * polling when the window is invisible (if `refreshInterval` is enabled)
   * @defaultValue false
   *
   */
  refreshWhenHidden?: boolean;
  /**
   * polling when the browser is offline (determined by `navigator.onLine`)
   */
  refreshWhenOffline?: boolean;
  /**
   * automatically revalidate when window gets focused
   * @defaultValue true
   * @link https://swr.vercel.app/docs/revalidation
   */
  revalidateOnFocus: boolean;
  /**
   * automatically revalidate when the browser regains a network connection (via `navigator.onLine`)
   * @defaultValue true
   * @link https://swr.vercel.app/docs/revalidation
   */
  revalidateOnReconnect: boolean;
  /**
   * enable or disable automatic revalidation when component is mounted
   */
  revalidateOnMount?: boolean;
  /**
   * automatically revalidate even if there is stale data
   * @defaultValue true
   * @link https://swr.vercel.app/docs/revalidation#disable-automatic-revalidations
   */
  revalidateIfStale: boolean;
  /**
   * retry when fetcher has an error
   * @defaultValue true
   */
  shouldRetryOnError: boolean | ((err: Error) => boolean);
  /**
   * keep the previous result when key is changed but data is not ready
   * @defaultValue false
   */
  keepPreviousData?: boolean;
  /**
   * @experimental  enable React Suspense mode
   * @defaultValue false
   * @link https://swr.vercel.app/docs/suspense
   */
  suspense?: boolean;
  /**
   * initial data to be returned (note: ***This is per-hook***)
   */
  fallbackData?: Data;
  /**
   * the fetcher function
   */
  fetcher?: Fn;
  /**
   * array of middleware functions
   * @link https://swr.vercel.app/docs/middleware
   */
  use?: Middleware[];
  /**
   * a key-value object of multiple fallback data
   * @link https://swr.vercel.app/docs/with-nextjs#pre-rendering-with-default-data
   */
  fallback: {
    [key: string]: any;
  };
  /**
   * function to detect whether pause revalidations, will ignore fetched data and errors when it returns true. Returns false by default.
   */
  isPaused: () => boolean;
  /**
   * callback function when a request takes too long to load (see `loadingTimeout`)
   */
  onLoadingSlow: (key: string, config: Readonly<PublicConfiguration<Data, Error, Fn>>) => void;
  /**
   * callback function when a request finishes successfully
   */
  onSuccess: (
    data: Data,
    key: string,
    config: Readonly<PublicConfiguration<Data, Error, Fn>>,
  ) => void;
  /**
   * callback function when a request returns an error
   */
  onError: (
    err: Error,
    key: string,
    config: Readonly<PublicConfiguration<Data, Error, Fn>>,
  ) => void;
  /**
   * handler for error retry
   */
  onErrorRetry: (
    err: Error,
    key: string,
    config: Readonly<PublicConfiguration<Data, Error, Fn>>,
    revalidate: Revalidator,
    revalidateOpts: Required<RevalidatorOptions>,
  ) => void;
  /**
   * callback function when a request is ignored
   */
  onDiscarded: (key: string) => void;
  /**
   * comparison function used to detect when returned data has changed, to avoid spurious rerenders. By default, [stable-hash](https://github.com/shuding/stable-hash) is used.
   */
  compare: (a: Data | undefined, b: Data | undefined) => boolean;
  /**
   * isOnline and isVisible are functions that return a boolean, to determine if the application is "active". By default, SWR will bail out a revalidation if these conditions are not met.
   * @link https://swr.vercel.app/docs/advanced/react-native#customize-focus-and-reconnect-events
   */
  isOnline: () => boolean;
  /**
   * isOnline and isVisible are functions that return a boolean, to determine if the application is "active". By default, SWR will bail out a revalidation if these conditions are not met.
   * @link https://swr.vercel.app/docs/advanced/react-native#customize-focus-and-reconnect-events
   */
  isVisible: () => boolean;
}
