import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WalletContent({
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
          d="M2.25 4.75V13.25C2.25 14.355 3.145 15.25 4.25 15.25H14.75C15.302 15.25 15.75 14.802 15.75 14.25V7.75C15.75 7.198 15.302 6.75 14.75 6.75H4.25C3.145 6.75 2.25 5.855 2.25 4.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M2.25 4.75V13.25C2.25 14.355 3.145 15.25 4.25 15.25H14.75C15.302 15.25 15.75 14.802 15.75 14.25V7.75C15.75 7.198 15.302 6.75 14.75 6.75H4.25C3.145 6.75 2.25 5.855 2.25 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 4.75C2.25 3.645 3.145 2.75 4.25 2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.03003 4.25503L7.23703 1.78902C7.47803 1.29202 8.07603 1.08501 8.57303 1.32601L14.587 4.243"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.5 12C13.052 12 13.5 11.552 13.5 11C13.5 10.448 13.052 10 12.5 10C11.948 10 11.5 10.448 11.5 11C11.5 11.552 11.948 12 12.5 12Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default WalletContent;
