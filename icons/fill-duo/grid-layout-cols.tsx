import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridLayoutCols({
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
          d="M14.2501 2H11.7501C10.7836 2 10.0001 2.7835 10.0001 3.75V14.25C10.0001 15.2165 10.7836 16 11.7501 16H14.2501C15.2166 16 16.0001 15.2165 16.0001 14.25V3.75C16.0001 2.7835 15.2166 2 14.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.25009 2H3.75009C2.78359 2 2.00009 2.7835 2.00009 3.75V14.25C2.00009 15.2165 2.78359 16 3.75009 16H6.25009C7.21659 16 8.00009 15.2165 8.00009 14.25V3.75C8.00009 2.7835 7.21659 2 6.25009 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GridLayoutCols;
