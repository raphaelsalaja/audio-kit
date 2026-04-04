import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BowlFood({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M4.9296 7.45373C5.4311 8.93434 6.83221 10 8.48222 10C8.73531 10 8.98254 9.97493 9.22157 9.92713C9.76742 9.81799 10.2705 9.59034 10.7028 9.27215C11.1272 9.61753 11.6405 9.85791 12.2031 9.95373C12.3817 9.98415 12.5654 10 12.7527 10C14.5476 10 16.0027 8.54493 16.0027 6.75C16.0027 5.02444 14.6579 3.61298 12.9592 3.50646C12.8909 3.50218 12.822 3.5 12.7527 3.5C12.2465 3.5 11.7674 3.61571 11.3403 3.82212C10.9888 3.40881 10.5493 3.0727 10.0508 2.8428C9.57354 2.62275 9.04222 2.5 8.48222 2.5C7.50781 2.5 6.6202 2.87165 5.95341 3.48093C6.30081 4.07363 6.49999 4.76364 6.49999 5.5C6.49999 6.45695 5.82761 7.25711 4.9296 7.45373Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.78 7.22C16.639 7.079 16.449 7 16.25 7H1.75C1.551 7 1.36 7.079 1.22 7.22C1.079 7.361 1 7.552 1 7.751C1.002 10.953 2.935 13.71 6.042 14.947C6.13 14.982 6.225 15 6.319 15H11.68C11.775 15 11.869 14.982 11.957 14.947C15.064 13.71 16.997 10.953 16.999 7.751C16.999 7.552 16.921 7.361 16.78 7.22Z"
          fill={fill}
        />
        <path
          d="M4.5 6C3.12 6 2 4.88 2 3.5C2 3.224 2.224 3 2.5 3C3.88 3 5 4.12 5 5.5C5 5.776 4.776 6 4.5 6Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BowlFood;
