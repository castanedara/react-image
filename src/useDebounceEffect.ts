import { useEffect, DependencyList } from 'react'


export function useDebounceEffect(
  fn: () => void,
  waitTime: number,
  deps?: any,
) {

  /* eslint-disable */

  useEffect(() => {

    const t = setTimeout(() => fn.apply(undefined, deps), waitTime)

    return () => {
      clearTimeout(t)
    }
  }, deps)

  /* eslint-enable */

}
