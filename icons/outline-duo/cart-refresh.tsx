import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CartRefresh({
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
          d="M9.04395 4.66016C9.36478 7.09268 11.4332 8.97207 13.9473 8.99805L13.626 9.98438C13.4882 10.3898 13.0259 10.6631 12.5977 10.6631H5.00098L4.12891 4.57129L9.04395 4.66016Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 1.75L3.101 2.088C3.494 2.186 3.78901 2.51199 3.84801 2.91299L4.92731 10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.29926 4.75H4.11798"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 13.25H4.75C3.9216 13.25 3.25 12.5784 3.25 11.75C3.25 10.9216 3.9216 10.25 4.75 10.25H13.0496C13.4108 10.25 13.7388 10.0559 13.9153 9.75073"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 17C4.552 17 5 16.552 5 16C5 15.448 4.552 15 4 15C3.448 15 3 15.448 3 16C3 16.552 3.448 17 4 17Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14 17C14.552 17 15 16.552 15 16C15 15.448 14.552 15 14 15C13.448 15 13 15.448 13 16C13 16.552 13.448 17 14 17Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.25 3.25H16.75V0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16 5.88699C15.499 6.41799 14.788 6.75 14 6.75C12.481 6.75 11.25 5.519 11.25 4C11.25 2.481 12.481 1.25 14 1.25C15.166 1.25 16.162 1.976 16.563 3"
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

export default CartRefresh;
