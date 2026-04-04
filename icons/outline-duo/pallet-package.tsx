import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PalletPackage({
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
          d="M10.75 1.75H7.25C6.698 1.75 6.25 2.198 6.25 2.75V6.25C6.25 6.802 6.698 7.25 7.25 7.25H10.75C11.302 7.25 11.75 6.802 11.75 6.25V2.75C11.75 2.198 11.302 1.75 10.75 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.5 13.5V14.75C7.5 15.0261 7.7239 15.25 8 15.25H10.25C10.5261 15.25 10.75 15.0261 10.75 14.75V13.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.25 11.25H16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 4.1525L16.75 11.25V14.75C16.75 15.0261 16.5261 15.25 16.25 15.25H13.75C13.4739 15.25 13.25 15.0261 13.25 14.75V13.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.5 13.5V14.75C4.5 15.0261 4.2761 15.25 4 15.25H1.75C1.4739 15.25 1.25 15.0261 1.25 14.75V11.25L3.25 4.1525"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 1.75H7.25C6.698 1.75 6.25 2.198 6.25 2.75V6.25C6.25 6.802 6.698 7.25 7.25 7.25H10.75C11.302 7.25 11.75 6.802 11.75 6.25V2.75C11.75 2.198 11.302 1.75 10.75 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 1.75V3.75"
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

export default PalletPackage;
