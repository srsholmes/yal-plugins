import { removeTypes } from 'remove-types';

(async () => {
  const args = process.argv.slice(2);
  //  write to stdout
  // process.stdout.write('Hello from script.ts');
  // process.stdout.write('***');
  // process.stdout.write(args.toString());
  try {
    let ts = args[0];
    // console.log('ts', ts);
    // let ts = 'const a: number = 1;'
    let result = await removeTypes(ts);
    console.log(result);
  } catch (e) {
    process.stderr.write('Hello from script.ts \n');
    process.stderr.write('*** \n');
    process.stderr.write(`${args.toString()} \n`);
    // console.log('ERROR');
    // console.log(e);
    // write to stderr
    process.stderr.write(e);
  }
})();
