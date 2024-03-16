import { renderHook } from '@testing-library/react-hooks';
import usePriceInfoState from './PriceInfo.state';

describe('usePriceInfoState', () => {
  it('calculates current price, percentage change, and formats them as strings', () => {
    const { result } = renderHook(() => usePriceInfoState([100, 150, 120]));

    expect(result.current.stringifiedCurrentPrice).toBe('120.00');
    expect(result.current.stringifiedPercentage).toBe('20.00');
    expect(result.current.percentageChange).toBe(20);
  });
});