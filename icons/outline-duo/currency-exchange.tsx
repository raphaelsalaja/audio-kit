import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CurrencyExchange({
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
          d="M9 9.75C11.071 9.75 12.75 8.855 12.75 7.75C12.75 6.645 11.071 5.75 9 5.75C6.929 5.75 5.25 6.645 5.25 7.75C5.25 8.855 6.929 9.75 9 9.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9 9.75C11.071 9.75 12.75 8.855 12.75 7.75C12.75 6.645 11.071 5.75 9 5.75C6.929 5.75 5.25 6.645 5.25 7.75C5.25 8.855 6.929 9.75 9 9.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 7.75V10.25C5.25 11.355 6.929 12.25 9 12.25C11.071 12.25 12.75 11.355 12.75 10.25V7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.12 14.695L15.712 11.75H15.71C14.627 14.39 12.03 16.25 8.99998 16.25C5.06318 16.25 1.85909 13.112 1.75269 9.20081"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.88 3.30499L2.28799 6.25H2.28999C3.37299 3.61 5.969 1.75 9 1.75C12.9366 1.75 16.1405 4.8876 16.2473 8.7984"
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

export default CurrencyExchange;
