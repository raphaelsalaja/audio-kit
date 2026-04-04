import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseDollar({
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
          d="M14.25 4.75H3.75C2.6454 4.75 1.75 5.645 1.75 6.75V13.25C1.75 14.355 2.6454 15.25 3.75 15.25H14.25C15.3546 15.25 16.25 14.355 16.25 13.25V6.75C16.25 5.645 15.3546 4.75 14.25 4.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M13.7244 9.62939C14.7656 9.35029 15.6191 9.0236 16.25 8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 8.75C2.3313 9.0018 3.1011 9.29951 4.0325 9.56281"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 4.75V2.25C6.25 1.698 6.698 1.25 7.25 1.25H10.75C11.302 1.25 11.75 1.698 11.75 2.25V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 4.75H3.75C2.645 4.75 1.75 5.645 1.75 6.75V13.25C1.75 14.355 2.645 15.25 3.75 15.25H14.25C15.355 15.25 16.25 14.355 16.25 13.25V6.75C16.25 5.645 15.355 4.75 14.25 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.8181 7.50018H8.20444C7.51404 7.50018 6.95445 8.05982 6.95435 8.75012C6.95435 9.44062 7.51394 10.0004 8.20444 10.0004H9.79565C10.4858 10.0004 11.0455 10.5599 11.0455 11.2502C11.0455 11.9406 10.4859 12.5002 9.79565 12.5002H7.18165"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.75V7.50018"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 12.5V13.2502"
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

export default SuitcaseDollar;
