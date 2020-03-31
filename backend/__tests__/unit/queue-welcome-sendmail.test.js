import Mail from '../../src/lib/Mail';

import WelcomeMail from '../../src/app/jobs/WelcomeMail';

import factory from '../factories';
import truncate from '../util/truncate';

describe('Welcome Send Mail', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should send mail', async () => {
    const { name, email } = await factory.create('User');

    jest.spyOn(Mail, 'sendMail').mockImplementation(() => {});

    await WelcomeMail.handle({
      data: {
        name,
        email,
      },
    });

    expect(Mail.sendMail).toHaveBeenCalled();
  });
});
