import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowShield({
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
          d="M1.75 4.75C1.75 3.65 2.6454 2.75 3.75 2.75H14.25C15.3546 2.75 16.25 3.65 16.25 4.75V7.75H1.75V4.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M4.25 6C4.6642 6 5 5.66 5 5.25C5 4.84 4.6642 4.5 4.25 4.5C3.8358 4.5 3.5 4.84 3.5 5.25C3.5 5.66 3.8358 6 4.25 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.75 6C7.1642 6 7.5 5.66 7.5 5.25C7.5 4.84 7.1642 4.5 6.75 4.5C6.3358 4.5 6 4.84 6 5.25C6 5.66 6.3358 6 6.75 6Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M1.75 7.75H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.75V4.75C16.25 3.65 15.355 2.75 14.25 2.75H3.75C2.645 2.75 1.75 3.65 1.75 4.75V13.25C1.75 14.35 2.645 15.25 3.75 15.25H8.2611"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 10.75L11.25 12V14.9399C11.25 16.4799 14 17.25 14 17.25V10.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14 10.75L16.75 12V14.9399C16.75 16.4799 14 17.25 14 17.25C14 17.25 11.25 16.48 11.25 14.9399V12L14 10.75Z"
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

export default WindowShield;
