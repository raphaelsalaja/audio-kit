import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Envelopes({
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
          d="M6.25 2C5.00779 2 4 3.00779 4 4.25V10.75C4 11.9922 5.00779 13 6.25 13H14.75C15.9922 13 17 11.9922 17 10.75V4.25C17 3.00779 15.9922 2 14.75 2H6.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.4282 8.55456L16.6475 5.29228C16.8718 5.15206 16.9964 4.91265 17 4.66643V4.25C17 3.00779 15.9922 2 14.75 2H6.25C5.00779 2 4 3.00779 4 4.25V4.66912C4.00442 4.91439 4.12894 5.15257 4.35246 5.29228L9.57211 8.55477C10.1395 8.91008 10.8608 8.90987 11.4282 8.55456Z"
          fill={fill}
        />
        <path
          d="M1.75 7C2.16421 7 2.5 7.33579 2.5 7.75V11.25C2.5 13.0448 3.95521 14.5 5.75 14.5H12.25C12.6642 14.5 13 14.8358 13 15.25C13 15.6642 12.6642 16 12.25 16H5.75C3.12679 16 1 13.8732 1 11.25V7.75C1 7.33579 1.33579 7 1.75 7Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Envelopes;
