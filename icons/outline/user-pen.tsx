import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserPen({
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
          d="M9 7.25049C10.519 7.25049 11.75 6.01929 11.75 4.50049C11.75 2.98169 10.519 1.75049 9 1.75049C7.481 1.75049 6.25 2.98169 6.25 4.50049C6.25 6.01929 7.481 7.25049 9 7.25049Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.7443 10.0134C10.1908 9.84808 9.6082 9.75049 9 9.75049C6.449 9.75049 4.26098 11.2805 3.29098 13.4705C2.92598 14.2955 3.378 15.2444 4.238 15.5154C5.0373 15.7678 6.01889 15.9922 7.12979 16.1238"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.7959 16.2042L15.9571 13.043C16.3476 12.6525 16.3476 12.0193 15.9571 11.6288L15.3713 11.043C14.9808 10.6525 14.3476 10.6525 13.9571 11.043L10.7959 14.2042L10.0001 17.0001L12.7959 16.2042Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default UserPen;
