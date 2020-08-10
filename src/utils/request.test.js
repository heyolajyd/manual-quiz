import { cleanup } from '@testing-library/react';
import { getQuestion } from './request';

const mockSuccessResponse = { questions: [{ question: 'hello', options: [] }] };
const mockJsonPromise = Promise.resolve(mockSuccessResponse);
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise,
});

jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

describe('request', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  afterEach(cleanup);

  it('getQuestion should return a response', async () => {
    const res = await getQuestion();

    expect(res.questions.length).toEqual(1);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('getQuestion throw exception', async () => {
    fetch.mockImplementationOnce(() => Promise.reject('API is down'));

    await expect(getQuestion()).rejects.toThrow();
  });
});
