import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectLayoutGrid2({
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
          d="M4.25 16L13.75 16C15.2688 16 16.5 14.7688 16.5 13.25L16.5 4.75C16.5 3.2312 15.2688 2 13.75 2L4.25 2C2.7312 2 1.5 3.2312 1.5 4.75L1.5 13.25C1.5 14.7688 2.7312 16 4.25 16Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.9999 16L10.4999 16L10.4999 12.5L1.49999 12.5L1.49999 11L10.4999 11L10.4999 7L1.49999 7L1.49999 5.5L10.4999 5.5L10.4999 2L11.9999 2L11.9999 16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RectLayoutGrid2;
