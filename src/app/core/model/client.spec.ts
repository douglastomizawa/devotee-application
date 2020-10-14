import { User } from './client.model';

describe('Client', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
});
