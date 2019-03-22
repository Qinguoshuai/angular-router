import { CrisisesModule } from './crisis-center.module';

describe('CrisisesModule', () => {
  let crisesModule: CrisisesModule;

  beforeEach(() => {
    crisesModule = new CrisisesModule();
  });

  it('should create an instance', () => {
    expect(crisesModule).toBeTruthy();
  });
});
