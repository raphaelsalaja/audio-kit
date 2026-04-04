import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretUpToLine({
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
          d="M8.15499 6.33199L3.47399 13.714C3.05199 14.38 3.52999 15.25 4.31899 15.25H13.682C14.47 15.25 14.949 14.38 14.527 13.714L9.84499 6.331C9.45199 5.712 8.54899 5.712 8.15599 6.331L8.15499 6.33199Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.15499 6.33199L3.47399 13.714C3.05199 14.38 3.52999 15.25 4.31899 15.25H13.682C14.47 15.25 14.949 14.38 14.527 13.714L9.84499 6.331C9.45199 5.712 8.54899 5.712 8.15599 6.331L8.15499 6.33199Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 2.75H14.75"
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

export default CaretUpToLine;
