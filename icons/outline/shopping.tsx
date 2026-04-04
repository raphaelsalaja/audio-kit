import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Shopping({
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
          d="M9.75198 5.2487C9.39818 4.9373 8.93458 4.75 8.43098 4.75H4.06898C3.03798 4.75 2.17598 5.534 2.07798 6.56L1.45898 13.06C1.34698 14.234 2.27097 15.25 3.44997 15.25H4.54868"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.82101 8.25H14.178C15.21 8.25 16.073 9.036 16.169 10.063L16.544 14.063C16.654 15.236 15.731 16.25 14.553 16.25H9.44601C8.26801 16.25 7.34501 15.236 7.45501 14.063L7.83001 10.063C7.92601 9.035 8.78901 8.25 9.82101 8.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 4.75V2.75C4.25 1.645 5.145 0.75 6.25 0.75C7.355 0.75 8.25 1.645 8.25 2.75V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 10.75V11C13.75 11.966 12.966 12.75 12 12.75C11.034 12.75 10.25 11.966 10.25 11V10.75"
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

export default Shopping;
