import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhoneSlash({
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
          d="M8.04523 9.9547C7.32623 9.2359 6.69844 8.4261 6.17944 7.5425L7.31824 6.6635C7.68314 6.3818 7.80822 5.88731 7.62112 5.46601L6.34683 2.5969C6.14823 2.1498 5.65532 1.91201 5.18182 2.03481L2.75504 2.66431C2.27414 2.78911 1.94285 3.24991 2.01175 3.74201C2.45685 6.92111 3.92863 9.7601 6.08423 11.9157"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.42859 13.8136C10.1501 14.9307 12.1277 15.69 14.2579 15.9882C14.75 16.0571 15.2109 15.7259 15.3356 15.2449L15.9651 12.8181C16.0879 12.3446 15.8501 11.8517 15.403 11.6531L12.5339 10.3788C12.1126 10.1917 11.618 10.3168 11.3364 10.6817L10.4574 11.8205"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
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

export default PhoneSlash;
