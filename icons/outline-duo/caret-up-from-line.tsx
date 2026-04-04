import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretUpFromLine({
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
          d="M8.15499 3.332L3.47399 10.714C3.05199 11.38 3.52999 12.25 4.31899 12.25H13.682C14.47 12.25 14.949 11.38 14.527 10.714L9.84499 3.332C9.45199 2.713 8.54899 2.713 8.15599 3.332H8.15499Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.15499 3.332L3.47399 10.714C3.05199 11.38 3.52999 12.25 4.31899 12.25H13.682C14.47 12.25 14.949 11.38 14.527 10.714L9.84499 3.332C9.45199 2.713 8.54899 2.713 8.15599 3.332H8.15499Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 15.25H14.75"
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

export default CaretUpFromLine;
