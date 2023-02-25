import { createStore } from 'solid-js/store';
const [state, setState] = createStore({ text: 'hello world' });

export { state, setState };
