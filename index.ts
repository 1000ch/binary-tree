import {validate} from './validate.ts';

const decoder = new TextDecoder();
for await (const chunk of Deno.stdin.readable) {
  const text = decoder.decode(chunk);

  try {
    const data = JSON.parse(text);
    console.log(validate(data));
  } catch {
    console.log(`Couldn't parse stdin to json`);
  }
}
