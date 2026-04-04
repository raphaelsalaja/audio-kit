import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Windsock({
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
          d="M9.75 3.3815L7.353 2.877C7.042 2.811 6.75 3.048 6.75 3.366V9.634C6.75 9.951 7.042 10.188 7.353 10.123L9.75 9.6185V3.3815ZM13.25 8.88186L15.853 8.334C16.084 8.286 16.25 8.08 16.25 7.844V5.155C16.25 4.919 16.084 4.715 15.853 4.666L13.25 4.11815V8.88186Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M3.75 16.25V1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.853 8.334L7.353 10.123C7.042 10.188 6.75 9.951 6.75 9.634V3.366C6.75 3.048 7.042 2.811 7.353 2.877L15.853 4.666C16.084 4.715 16.25 4.919 16.25 5.155V7.844C16.25 8.08 16.084 8.286 15.853 8.334Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 3.382V9.618"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 4.118V8.882"
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

export default Windsock;
