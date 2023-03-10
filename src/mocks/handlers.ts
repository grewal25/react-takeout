import { rest } from 'msw';
import { MOCK_API_URL } from './constants';
import { menu } from './mockMenu';
import { mockMovies } from './mockMovies';

export const handlers = [
  rest.get(`${MOCK_API_URL}/top-10-movies`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockMovies));
  }),
  rest.get(`${MOCK_API_URL}/getMenu`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(menu));
  }),
];
