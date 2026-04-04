import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageClip({
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
          d="M11 11.25C11 10.1458 11.8958 9.25 13 9.25C14.1042 9.25 15 10.1458 15 11.25V13.25C15 13.6642 14.6642 14 14.25 14C13.8358 14 13.5 13.6642 13.5 13.25V11.25C13.5 10.9742 13.2758 10.75 13 10.75C12.7242 10.75 12.5 10.9742 12.5 11.25V13.75C12.5 14.7168 13.2832 15.5 14.25 15.5C15.2168 15.5 16 14.7168 16 13.75V11.75C16 11.3358 16.3358 11 16.75 11C17.1642 11 17.5 11.3358 17.5 11.75V13.75C17.5 15.5452 16.0452 17 14.25 17C12.4548 17 11 15.5452 11 13.75V11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 4.25C1 2.73203 2.23054 1.5 3.75 1.5H14.25C15.7695 1.5 17 2.73203 17 4.25V9.51373C16.9179 9.50466 16.8345 9.5 16.75 9.5C16.5192 9.5 16.2965 9.53475 16.0869 9.5993C15.497 8.49873 14.3358 7.75 13 7.75C11.0674 7.75 9.5 9.31736 9.5 11.25V13.75C9.5 13.8997 9.50693 14.0479 9.52048 14.1941L6.21852 16.8357C5.99339 17.0158 5.68496 17.0509 5.42511 16.926C5.16526 16.8011 5 16.5383 5 16.25V14H3.75C2.23054 14 1 12.768 1 11.25V4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default MessageClip;
