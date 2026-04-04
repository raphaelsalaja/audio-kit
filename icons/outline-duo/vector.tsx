import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Vector({
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
          d="M10 3.25H8C7.44772 3.25 7 3.69772 7 4.25V6.25C7 6.80228 7.44772 7.25 8 7.25H10C10.5523 7.25 11 6.80228 11 6.25V4.25C11 3.69772 10.5523 3.25 10 3.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.25 10.75H2.25C1.69772 10.75 1.25 11.1977 1.25 11.75V13.75C1.25 14.3023 1.69772 14.75 2.25 14.75H4.25C4.80228 14.75 5.25 14.3023 5.25 13.75V11.75C5.25 11.1977 4.80228 10.75 4.25 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.75 14.75H15.75C16.3023 14.75 16.75 14.3023 16.75 13.75V11.75C16.75 11.1977 16.3023 10.75 15.75 10.75H13.75C13.1977 10.75 12.75 11.1977 12.75 11.75V13.75C12.75 14.3023 13.1977 14.75 13.75 14.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.25 10.75C3.25 8.27799 4.81 6.16999 7 5.35699"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 10.75C14.75 8.27799 13.19 6.16999 11 5.35699"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 5.25H7"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 5.25H11"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10 3.25H8C7.44772 3.25 7 3.69772 7 4.25V6.25C7 6.80228 7.44772 7.25 8 7.25H10C10.5523 7.25 11 6.80228 11 6.25V4.25C11 3.69772 10.5523 3.25 10 3.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 10.75H2.25C1.69772 10.75 1.25 11.1977 1.25 11.75V13.75C1.25 14.3023 1.69772 14.75 2.25 14.75H4.25C4.80228 14.75 5.25 14.3023 5.25 13.75V11.75C5.25 11.1977 4.80228 10.75 4.25 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 14.75H15.75C16.3023 14.75 16.75 14.3023 16.75 13.75V11.75C16.75 11.1977 16.3023 10.75 15.75 10.75H13.75C13.1977 10.75 12.75 11.1977 12.75 11.75V13.75C12.75 14.3023 13.1977 14.75 13.75 14.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.5 6.75C2.32843 6.75 3 6.07843 3 5.25C3 4.42157 2.32843 3.75 1.5 3.75C0.671573 3.75 0 4.42157 0 5.25C0 6.07843 0.671573 6.75 1.5 6.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.5 6.75C17.3284 6.75 18 6.07843 18 5.25C18 4.42157 17.3284 3.75 16.5 3.75C15.6716 3.75 15 4.42157 15 5.25C15 6.07843 15.6716 6.75 16.5 6.75Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Vector;
