import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridLayoutCols3({
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
          d="M9.25009 2H8.75009C7.78359 2 7.00009 2.7835 7.00009 3.75V14.25C7.00009 15.2165 7.78359 16 8.75009 16H9.25009C10.2166 16 11.0001 15.2165 11.0001 14.25V3.75C11.0001 2.7835 10.2166 2 9.25009 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.7501 2H14.2501C13.2836 2 12.5001 2.7835 12.5001 3.75V14.25C12.5001 15.2165 13.2836 16 14.2501 16H14.7501C15.7166 16 16.5001 15.2165 16.5001 14.25V3.75C16.5001 2.7835 15.7166 2 14.7501 2Z"
          fill={fill}
        />
        <path
          d="M3.75009 2H3.25009C2.28359 2 1.50009 2.7835 1.50009 3.75V14.25C1.50009 15.2165 2.28359 16 3.25009 16H3.75009C4.71659 16 5.50009 15.2165 5.50009 14.25V3.75C5.50009 2.7835 4.71659 2 3.75009 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GridLayoutCols3;
