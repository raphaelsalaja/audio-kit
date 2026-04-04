import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function IsolatedCube({
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
          d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"
          fill={secondaryfill}
        />
        <path
          d="M16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3Z"
          fill={secondaryfill}
        />
        <path
          d="M2 17C2.55228 17 3 16.5523 3 16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16C1 16.5523 1.44772 17 2 17Z"
          fill={secondaryfill}
        />
        <path
          d="M16 17C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15C15.4477 15 15 15.4477 15 16C15 16.5523 15.4477 17 16 17Z"
          fill={secondaryfill}
        />
        <path
          d="M3.327 5.7095C3.1169 6.0735 3 6.491 3 6.9229V11.0777C3 11.9415 3.4639 12.7471 4.2109 13.1798L7.7812 15.2511C8.1572 15.4689 8.5781 15.5778 9 15.5778V9.0002L3.327 5.7095Z"
          fill={fill}
          opacity="0.4"
        />
        <path
          d="M9 15.5776C9.4219 15.5776 9.8428 15.4687 10.2188 15.2509L13.7901 13.1791C14.5362 12.7455 15.0001 11.9398 15.0001 11.0775V6.92271C15.0001 6.49061 14.8836 6.07281 14.6737 5.70911L9.0001 8.99991L9 15.5776Z"
          fill={fill}
        />
        <path
          d="M9 9L14.6736 5.7092C14.4642 5.3467 14.1621 5.0373 13.7891 4.8208L10.2198 2.7505C9.4678 2.313 8.5323 2.313 7.7803 2.7505L4.21 4.8218C3.8378 5.0384 3.5362 5.3474 3.327 5.7095L9 9Z"
          fill={fill}
          opacity="0.2"
        />
      </g>
    </svg>
  );
}

export default IsolatedCube;
