import { createLeadingZero } from '../utils';

export function Buttons(props: {
  add: () => void;
  subtract: () => void;
  count: string;
}) {
  return (
    <div class="flex items-center">
      <button
        onClick={props.subtract}
        class="text-black/80 hover:bg-black/5 w-8 h-8 flex justify-center items-center rounded-md"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div class="flex-1 text-center text-sm text-black/80 font-medium">
        #{createLeadingZero(props.count)}
      </div>
      <button
        onClick={props.add}
        class="text-black/80 hover:bg-black/5 w-8 h-8 flex justify-center items-center rounded-md"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
