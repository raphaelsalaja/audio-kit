import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Link4({
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
          d="M9.00101 2.5C7.34412 2.5 6.00101 3.84311 6.00101 5.5V7.25C6.00101 7.66421 5.66522 8 5.25101 8C4.83679 8 4.50101 7.66421 4.50101 7.25V5.5C4.50101 3.01469 6.51569 1 9.00101 1C11.4863 1 13.501 3.01469 13.501 5.5V7.25C13.501 7.66421 13.1652 8 12.751 8C12.3368 8 12.001 7.66421 12.001 7.25V5.5C12.001 3.84311 10.6579 2.5 9.00101 2.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.25101 10C5.66522 10 6.00101 10.3358 6.00101 10.75V12.5C6.00101 14.1569 7.34412 15.5 9.00101 15.5C10.6579 15.5 12.001 14.1569 12.001 12.5V10.75C12.001 10.3358 12.3368 10 12.751 10C13.1652 10 13.501 10.3358 13.501 10.75V12.5C13.501 14.9853 11.4863 17 9.00101 17C6.51569 17 4.50101 14.9853 4.50101 12.5V10.75C4.50101 10.3358 4.83679 10 5.25101 10Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.00101 6C9.41522 6 9.75101 6.33579 9.75101 6.75V11.25C9.75101 11.6642 9.41522 12 9.00101 12C8.58679 12 8.25101 11.6642 8.25101 11.25V6.75C8.25101 6.33579 8.58679 6 9.00101 6Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Link4;
