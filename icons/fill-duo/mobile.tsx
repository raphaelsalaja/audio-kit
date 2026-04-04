import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Mobile({
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
          d="M5.75 1C4.23119 1 3 2.23119 3 3.75V14.25C3 15.7688 4.23119 17 5.75 17H12.25C13.7688 17 15 15.7688 15 14.25V3.75C15 2.23119 13.7688 1 12.25 1H5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.75 1V1.75C11.75 2.44036 11.1904 3 10.5 3H7.5C6.80964 3 6.25 2.44036 6.25 1.75V1H11.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Mobile;
