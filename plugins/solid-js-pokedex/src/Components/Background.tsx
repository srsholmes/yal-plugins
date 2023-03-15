import { createQuery } from '@tanstack/solid-query';
import { getColorPalette } from '../api/pokemon';
import { text } from '../state';

const constrainValue = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

export function Background() {
  const colorsQuery = createQuery(() => ({
    queryKey: ['color', text()],
    queryFn: () => getColorPalette(text()),
    placeholderData: (prev) => prev,
  }));

  const color = () =>
    !colorsQuery.data
      ? ''
      : `linear-gradient(
		45deg,
		hsl(${constrainValue(colorsQuery.data[0] + 25, 0, 360)}deg ${constrainValue(
          colorsQuery.data[1] + 50,
          0,
          100
        )}% ${constrainValue(colorsQuery.data[2] - 10, 0, 100)}%) 0%,
		hsl(${constrainValue(colorsQuery.data[0] - 25, 0, 360)}deg ${constrainValue(
          colorsQuery.data[1] + 25,
          0,
          100
        )}% ${constrainValue(colorsQuery.data[2] + 10, 0, 100)}%) 100%
	)`;

  const iconColor = () =>
    !colorsQuery.data
      ? ''
      : `hsl(${colorsQuery.data[0]}deg ${constrainValue(
          colorsQuery.data[1] + 25,
          0,
          100
        )}% ${constrainValue(colorsQuery.data[2] - 10, 0, 100)}%)`;

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          'z-index': 1,
          'background-image': color(),
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          opacity: 0.5,
          'pointer-events': 'none',
          transition: 'background-image 0.5s ease',
        }}
      ></div>
      <div
        style={{
          position: 'fixed',
          'z-index': 2,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          opacity: 0.3,
          'pointer-events': 'none',
        }}
      >
        <Icon color={iconColor()} />
      </div>
    </div>
  );
}

function Icon(props) {
  const size = '75vh';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      style={{
        rotate: '90deg',
        position: 'absolute',
        right: '0%',
        top: '50%',
        transform: 'translate(-85%, -45%)',
      }}
      fill="none"
      viewBox="0 0 96 96"
    >
      <g fill={props.color}>
        <path
          fill-rule="evenodd"
          d="M48 96c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48zm0-19c16.016 0 29-12.984 29-29S64.016 19 48 19 19 31.984 19 48s12.984 29 29 29z"
          clip-rule="evenodd"
        ></path>
        <path d="M45 60.652v16.195a29.324 29.324 0 006 0V60.652C56.733 59.298 61 54.147 61 48c0-6.147-4.267-11.298-10-12.652V19.153a29.324 29.324 0 00-6 0v16.195C39.267 36.702 35 41.853 35 48c0 6.147 4.267 11.298 10 12.652z"></path>
      </g>
    </svg>
  );
}
