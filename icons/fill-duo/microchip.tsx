import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Microchip({
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
          d="M3 5.75C3 4.23079 4.23079 3 5.75 3H12.25C13.7692 3 15 4.23079 15 5.75V12.25C15 13.7692 13.7692 15 12.25 15H5.75C4.23079 15 3 13.7692 3 12.25V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6 6.75C6 6.33579 6.33579 6 6.75 6H11.25C11.6642 6 12 6.33579 12 6.75V11.25C12 11.6642 11.6642 12 11.25 12H6.75C6.33579 12 6 11.6642 6 11.25V6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 1C9.41421 1 9.75 1.33579 9.75 1.75V3.25C9.75 3.66421 9.41421 4 9 4C8.58579 4 8.25 3.66421 8.25 3.25L8.25 1.75C8.25 1.33579 8.58579 1 9 1Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.75 1C6.16421 1 6.5 1.33579 6.5 1.75V3.25C6.5 3.66421 6.16421 4 5.75 4C5.33579 4 5 3.66421 5 3.25V1.75C5 1.33579 5.33579 1 5.75 1Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.25 1C12.6642 1 13 1.33579 13 1.75V3.25C13 3.66421 12.6642 4 12.25 4C11.8358 4 11.5 3.66421 11.5 3.25V1.75C11.5 1.33579 11.8358 1 12.25 1Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14 9C14 8.58579 14.3358 8.25 14.75 8.25H16.25C16.6642 8.25 17 8.58579 17 9C17 9.41421 16.6642 9.75 16.25 9.75H14.75C14.3358 9.75 14 9.41421 14 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14 5.75C14 5.33579 14.3358 5 14.75 5H16.25C16.6642 5 17 5.33579 17 5.75C17 6.16421 16.6642 6.5 16.25 6.5H14.75C14.3358 6.5 14 6.16421 14 5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14 12.25C14 11.8358 14.3358 11.5 14.75 11.5H16.25C16.6642 11.5 17 11.8358 17 12.25C17 12.6642 16.6642 13 16.25 13H14.75C14.3358 13 14 12.6642 14 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 14C9.41421 14 9.75 14.3358 9.75 14.75V16.25C9.75 16.6642 9.41421 17 9 17C8.58579 17 8.25 16.6642 8.25 16.25V14.75C8.25 14.3358 8.58579 14 9 14Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.25 14C12.6642 14 13 14.3358 13 14.75V16.25C13 16.6642 12.6642 17 12.25 17C11.8358 17 11.5 16.6642 11.5 16.25V14.75C11.5 14.3358 11.8358 14 12.25 14Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.75 14C6.16421 14 6.5 14.3358 6.5 14.75V16.25C6.5 16.6642 6.16421 17 5.75 17C5.33579 17 5 16.6642 5 16.25V14.75C5 14.3358 5.33579 14 5.75 14Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 9C1 8.58579 1.33579 8.25 1.75 8.25H3.25C3.66421 8.25 4 8.58579 4 9C4 9.41421 3.66421 9.75 3.25 9.75H1.75C1.33579 9.75 1 9.41421 1 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 12.25C1 11.8358 1.33579 11.5 1.75 11.5L3.25 11.5C3.66421 11.5 4 11.8358 4 12.25C4 12.6642 3.66421 13 3.25 13H1.75C1.33579 13 1 12.6642 1 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 5.75C1 5.33579 1.33579 5 1.75 5L3.25 5C3.66421 5 4 5.33579 4 5.75C4 6.16421 3.66421 6.5 3.25 6.5H1.75C1.33579 6.5 1 6.16421 1 5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Microchip;
