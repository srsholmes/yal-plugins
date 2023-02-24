import { add } from './module-test';

async function main() {
  const args = process.argv.slice(2);
  const added = add(Number(args[0]), Number(args[1]));
  console.log(added);
}

main();
