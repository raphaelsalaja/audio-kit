import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeClip({
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
          d="M1 5.25C1 3.73079 2.23079 2.5 3.75 2.5H14.25C15.7692 2.5 17 3.73079 17 5.25V10.5137C16.8579 10.5294 16.7198 10.5584 16.5869 10.5993C15.997 9.49873 14.8358 8.75 13.5 8.75C11.5674 8.75 10 10.3174 10 12.25V14.75C10 15.0052 10.0201 15.2557 10.0589 15.5H3.75C2.23079 15.5 1 14.2692 1 12.75V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.5 12.25C11.5 11.1458 12.3958 10.25 13.5 10.25C14.6042 10.25 15.5 11.1458 15.5 12.25V14.25C15.5 14.6642 15.1642 15 14.75 15C14.3358 15 14 14.6642 14 14.25V12.25C14 11.9742 13.7758 11.75 13.5 11.75C13.2242 11.75 13 11.9742 13 12.25V14.75C13 15.7168 13.7832 16.5 14.75 16.5C15.7168 16.5 16.5 15.7168 16.5 14.75V12.75C16.5 12.3358 16.8358 12 17.25 12C17.6642 12 18 12.3358 18 12.75V14.75C18 16.5452 16.5452 18 14.75 18C12.9548 18 11.5 16.5452 11.5 14.75V12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.9688 4.83458L9.84531 8.76513C9.31885 9.05549 8.68124 9.05557 8.15478 8.76521L1.03101 4.83535C1.23084 3.513 2.37171 2.5 3.74998 2.5H14.25C15.628 2.5 16.7687 3.5126 16.9688 4.83458Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EnvelopeClip;
