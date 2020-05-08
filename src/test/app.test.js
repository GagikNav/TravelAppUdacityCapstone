import { handleSubmit } from '../client/js/app';

describe('app', () => {
   test('performAction should be defined', () => {
      expect(handleSubmit).toBeDefined();
   });
});
