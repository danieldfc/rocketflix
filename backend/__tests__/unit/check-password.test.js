import bcrypt from 'bcryptjs';

import factory from '../factories';
import truncate from '../util/truncate';

describe('Check password', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able encrypt password with new user created', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const compareHash = await bcrypt.compare('123456', user.password_hash);

    expect(compareHash).toBe(true);
  });
});
