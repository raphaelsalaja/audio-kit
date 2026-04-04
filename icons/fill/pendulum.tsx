import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pendulum({
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
          d="M16.25 3.5C16.664 3.5 17 3.164 17 2.75C17 2.336 16.664 2 16.25 2H1.75C1.336 2 1 2.336 1 2.75C1 3.164 1.336 3.5 1.75 3.5H16.25Z"
          fill={secondaryfill}
        />
        <path
          d="M9.75 11.638V5.75C9.75 5.336 9.414 5 9 5C8.586 5 8.25 5.336 8.25 5.75V11.638C7.379 11.949 6.75 12.773 6.75 13.75C6.75 14.991 7.759 16 9 16C10.241 16 11.25 14.991 11.25 13.75C11.25 12.773 10.621 11.949 9.75 11.638Z"
          fill={fill}
        />
        <path
          d="M4.5 11.638V5.75C4.5 5.336 4.164 5 3.75 5C3.336 5 3 5.336 3 5.75V11.638C2.129 11.949 1.5 12.773 1.5 13.75C1.5 14.991 2.509 16 3.75 16C4.991 16 6 14.991 6 13.75C6 12.773 5.371 11.949 4.5 11.638Z"
          fill={fill}
        />
        <path
          d="M14.9904 5.63038C14.9243 5.22147 14.5393 4.94353 14.1304 5.0096C13.7215 5.07566 13.4435 5.46071 13.5096 5.86962L14.4294 11.5631C13.6579 12.0197 13.2031 12.9159 13.3532 13.8549C13.5493 15.0817 14.7033 15.9174 15.9296 15.7215C17.1559 15.5256 17.9923 14.3719 17.7962 13.1451C17.6373 12.1503 16.8485 11.4128 15.9021 11.2737L14.9904 5.63038Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Pendulum;
