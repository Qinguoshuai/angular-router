import { AuthModule } from './auth.module';

describe('AdminModule', () => {
  let adminModule: AuthModule;

  beforeEach(() => {
    adminModule = new AuthModule();
  });

  it('should create an instance', () => {
    expect(adminModule).toBeTruthy();
  });
});
