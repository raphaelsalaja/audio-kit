import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CheckUnderline({
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
          d="M15.2501 16H2.75009C2.33599 16 2.00009 15.6641 2.00009 15.25C2.00009 14.8359 2.33599 14.5 2.75009 14.5H15.2501C15.6642 14.5 16.0001 14.8359 16.0001 15.25C16.0001 15.6641 15.6642 16 15.2501 16Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.0001 12.5C6.7726 12.5 6.5567 12.3965 6.4147 12.2188L3.4147 8.4688C3.1559 8.1451 3.2082 7.6734 3.5314 7.4146C3.8571 7.1553 4.3278 7.2085 4.5856 7.5313L6.99089 10.5376L13.3884 2.28271C13.6423 1.95601 14.1135 1.89551 14.4406 2.14941C14.7677 2.40331 14.8278 2.87401 14.5739 3.20161L7.5929 12.2094C7.4523 12.391 7.23599 12.498 7.00599 12.4999L7.0001 12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CheckUnderline;
