import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareUser({
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
          d="M9 9.2505C9.9669 9.2505 10.75 8.467 10.75 7.5005C10.75 6.534 9.9669 5.7505 9 5.7505C8.0331 5.7505 7.25 6.534 7.25 7.5005C7.25 8.467 8.0331 9.2505 9 9.2505Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.03088 15.2505C5.27668 13.2771 6.95997 11.75 8.99997 11.75C11.04 11.75 12.7233 13.2771 12.9691 15.2505"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 2.7505H4.75C3.645 2.7505 2.75 3.6455 2.75 4.7505V13.2505C2.75 14.3555 3.645 15.2505 4.75 15.2505H13.25C14.355 15.2505 15.25 14.3555 15.25 13.2505V4.7505C15.25 3.6455 14.355 2.7505 13.25 2.7505Z"
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

export default SquareUser;
