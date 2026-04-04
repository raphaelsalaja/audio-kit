import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Compass4({
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
          d="M9 1C9.41421 1 9.75 1.33579 9.75 1.75V3.25C9.75 3.66421 9.41421 4 9 4C8.58579 4 8.25 3.66421 8.25 3.25V1.75C8.25 1.33579 8.58579 1 9 1Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14 9C14 8.58579 14.3358 8.25 14.75 8.25H16.25C16.6642 8.25 17 8.58579 17 9C17 9.41421 16.6642 9.75 16.25 9.75H14.75C14.3358 9.75 14 9.41421 14 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 14C9.41421 14 9.75 14.3358 9.75 14.75V16.25C9.75 16.6642 9.41421 17 9 17C8.58579 17 8.25 16.6642 8.25 16.25V14.75C8.25 14.3358 8.58579 14 9 14Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 9C1 8.58579 1.33579 8.25 1.75 8.25H3.25C3.66421 8.25 4 8.58579 4 9C4 9.41421 3.66421 9.75 3.25 9.75H1.75C1.33579 9.75 1 9.41421 1 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.2254 5.75943C13.3462 5.47755 13.2832 5.15052 13.0664 4.93367C12.8495 4.71681 12.5225 4.65383 12.2406 4.77464L7.2916 6.89564C7.11458 6.9715 6.97354 7.11254 6.89768 7.28956L4.77667 12.2386C4.65586 12.5204 4.71884 12.8475 4.93569 13.0643C5.15255 13.2812 5.47958 13.3442 5.76146 13.2234L10.7105 11.1024C10.8875 11.0265 11.0285 10.8855 11.1044 10.7084L13.2254 5.75943ZM9 10C9.552 10 10 9.5523 10 9C10 8.4477 9.552 8 9 8C8.448 8 8 8.4477 8 9C8 9.5523 8.448 10 9 10Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Compass4;
