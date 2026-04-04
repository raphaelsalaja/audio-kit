import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ColorPalette2({
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
          d="M6.591 14.591L13.132 8.04999C13.523 7.65899 13.523 7.02599 13.132 6.63599L11.364 4.86802C10.973 4.47702 10.34 4.47702 9.95001 4.86802"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 15.25H14.25C14.802 15.25 15.25 14.802 15.25 14.25V11.75C15.25 11.198 14.802 10.75 14.25 10.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 13.75C5.414 13.75 5.75 13.414 5.75 13C5.75 12.586 5.414 12.25 5 12.25C4.586 12.25 4.25 12.586 4.25 13C4.25 13.414 4.586 13.75 5 13.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5 15.25C3.758 15.25 2.75 14.242 2.75 13V3.75C2.75 3.198 3.198 2.75 3.75 2.75H6.25C6.802 2.75 7.25 3.198 7.25 3.75V13C7.25 14.242 6.242 15.25 5 15.25Z"
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

export default ColorPalette2;
