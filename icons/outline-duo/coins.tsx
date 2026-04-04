import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Coins({
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
          d="M3.595 10.01C2.753 10.351 2.25 10.782 2.25 11.25C2.25 12.355 5.048 13.25 8.5 13.25C11.952 13.25 14.75 12.355 14.75 11.25C14.75 10.957 14.553 10.679 14.2 10.428C12.859 10.801 11.216 11 9.5 11C7.607 11 5.80199 10.757 4.39499 10.307C4.12999 10.222 3.861 10.124 3.595 10.01Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9.5 5.75C12.952 5.75 15.75 4.855 15.75 3.75C15.75 2.645 12.952 1.75 9.5 1.75C6.048 1.75 3.25 2.645 3.25 3.75C3.25 4.855 6.048 5.75 9.5 5.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9.5 5.75C12.952 5.75 15.75 4.855 15.75 3.75C15.75 2.645 12.952 1.75 9.5 1.75C6.048 1.75 3.25 2.645 3.25 3.75C3.25 4.855 6.048 5.75 9.5 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 3.75V6.75C3.25 7.854 6.048 8.75 9.5 8.75C12.952 8.75 15.75 7.854 15.75 6.75V3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.5 5.75V8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 5.45801V8.45801"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 5.45801V8.45801"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 11.25V14.25C2.25 15.354 5.048 16.25 8.5 16.25C11.952 16.25 14.75 15.354 14.75 14.25V11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.5 13.25V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 12.958V15.958"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 12.958V15.958"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.76379 10.4549C2.43329 10.6986 2.25 10.9673 2.25 11.25C2.25 12.354 5.048 13.25 8.5 13.25C11.952 13.25 14.75 12.354 14.75 11.25C14.75 11.1942 14.7426 11.139 14.7281 11.0844"
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

export default Coins;
