import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretDownToLine({
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
          d="M9.84499 11.668L14.527 4.28499C14.949 3.61899 14.471 2.74899 13.682 2.74899H4.31799C3.52999 2.74899 3.05099 3.61899 3.47299 4.28499L8.15499 11.668C8.54799 12.287 9.45099 12.287 9.84399 11.668H9.84499Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.84499 11.668L14.527 4.28499C14.949 3.61899 14.471 2.74899 13.682 2.74899H4.31799C3.52999 2.74899 3.05099 3.61899 3.47299 4.28499L8.15499 11.668C8.54799 12.287 9.45099 12.287 9.84399 11.668H9.84499Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 15.25H3.25"
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

export default CaretDownToLine;
