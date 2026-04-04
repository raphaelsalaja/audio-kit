import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bus({
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
          d="M5.5 12C6.05228 12 6.5 11.5523 6.5 11C6.5 10.4477 6.05228 10 5.5 10C4.94772 10 4.5 10.4477 4.5 11C4.5 11.5523 4.94772 12 5.5 12Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12.5 12C13.0523 12 13.5 11.5523 13.5 11C13.5 10.4477 13.0523 10 12.5 10C11.9477 10 11.5 10.4477 11.5 11C11.5 11.5523 11.9477 12 12.5 12Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M15.75 7.25H17"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1 7.25H2.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 13.75V14.75C12.75 15.3023 13.1977 15.75 13.75 15.75H14.75C15.3023 15.75 15.75 15.3023 15.75 14.75V4.25C15.75 3.1454 14.8546 2.25 13.75 2.25H4.25C3.1454 2.25 2.25 3.1454 2.25 4.25V14.75C2.25 15.3023 2.6977 15.75 3.25 15.75H4.25C4.8023 15.75 5.25 15.3023 5.25 14.75V13.75H12.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 8.25H15.75"
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

export default Bus;
