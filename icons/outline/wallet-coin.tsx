import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WalletCoin({
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
          d="M9.5 15.25H14.75C15.302 15.25 15.75 14.802 15.75 14.25V7.75C15.75 7.198 15.302 6.75 14.75 6.75H4.25C3.145 6.75 2.25 5.855 2.25 4.75V8"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 4.75C2.25 3.645 3.145 2.75 4.25 2.75H12.75C13.302 2.75 13.75 3.198 13.75 3.75V4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.5 12C13.052 12 13.5 11.552 13.5 11C13.5 10.448 13.052 10 12.5 10C11.948 10 11.5 10.448 11.5 11C11.5 11.552 11.948 12 12.5 12Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M3.75 16.75C5.407 16.75 6.75 15.407 6.75 13.75C6.75 12.093 5.407 10.75 3.75 10.75C2.093 10.75 0.75 12.093 0.75 13.75C0.75 15.407 2.093 16.75 3.75 16.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 13V14.5"
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

export default WalletCoin;
