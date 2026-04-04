import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CartBolt({
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
          d="M10.0312 4.75C10.0766 4.94896 10.1748 5.14387 10.2754 5.32812L10.3535 5.46094C10.6989 6.00213 11.2582 6.3658 11.8857 6.46875L11.8486 6.59277C11.5216 7.66494 12.0328 8.81881 13.0537 9.29199L13.2471 9.37109C13.3525 9.4086 13.4599 9.43495 13.5674 9.45605L13.2891 9.99316C13.1514 10.3987 13.4478 10.751 13.0195 10.751H5.00098L4.12891 4.75H10.0312Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 1.75L3.101 2.088C3.494 2.186 3.789 2.51199 3.848 2.91299L4.9273 10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.29241 4.75H4.11801"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 13.25H4.75C3.9216 13.25 3.25 12.5784 3.25 11.75C3.25 10.9216 3.9216 10.25 4.75 10.25H13.0496C13.1697 10.25 13.2861 10.2285 13.3945 10.1887"
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
          d="M14.917 4.25H12.25L14.5 0.75L13.583 3.75H16.25L14 7.25L14.917 4.25Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CartBolt;
