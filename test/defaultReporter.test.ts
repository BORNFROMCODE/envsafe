import { EnvMissingError, InvalidEnvError } from '../src/errors';
import { defaultReporterText } from '../src/reporter';

test('reporter', () => {
  const errors = {
    foo: new InvalidEnvError('invalid'),
    bar: new EnvMissingError('missing'),
    zoo: new EnvMissingError('missing'),
  };
  expect(defaultReporterText({ errors, env: {}, output: {} }))
    .toMatchInlineSnapshot(`
    "================================
    ❌ Invalid environment variables:
        foo: invalid
    💨 Missing environment variables:
        bar: missing
        zoo: missing
    ================================"
  `);
});
