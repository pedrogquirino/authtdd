const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {
  beforeEach(async () => {
    await truncate();  
  });

  it('should ecnrypt user password', async () => {
    const user = await User.create({
      name: 'Pedro',
      email: 'donsonight@gmail.com',
      password: '123456'
    });

    const compareHash = await bcrypt.compare('123456', user.password_hash);

    expect(user.password_hash).toBe(true);
  });
});