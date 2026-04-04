import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2Half({
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
          d="M8.99999 4.926C8.82899 4.573 8.60399 4.25 8.33399 3.965C6.88299 2.437 4.46699 2.374 2.93899 3.826C1.41099 5.277 1.34899 7.693 2.79999 9.221L8.27999 14.915C8.47699 15.12 8.739 15.222 9.001 15.222V4.926H8.99999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.99999 4.926C9.17099 4.573 9.39599 4.25 9.66599 3.965C11.117 2.437 13.533 2.374 15.061 3.826C16.589 5.277 16.651 7.693 15.2 9.221L9.71999 14.915C9.52299 15.12 9.26099 15.222 8.99899 15.222"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.99999 4.926C8.82899 4.573 8.60399 4.25 8.33399 3.965C6.88299 2.437 4.46699 2.374 2.93899 3.826C1.41099 5.277 1.34899 7.693 2.79999 9.221L8.27999 14.915C8.47699 15.12 8.739 15.222 9.001 15.222V4.926H8.99999Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Heart2Half;
