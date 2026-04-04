import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Chart({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M7 13.75L3.5 12L7 9.75V13.75Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M3 12L7 14" stroke={fill} />
        <path
          d="M8 18.5L3.55279 16.2764C3.214 16.107 3 15.7607 3 15.382V12.618C3 12.2393 3.214 11.893 3.55279 11.7236L7 10"
          stroke={fill}
        />
        <path
          d="M11 12V6L17 3V9L11 12Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M15 22V14L21 11V19L15 22Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M7 4L11 6L17 3" stroke={fill} />
        <path d="M11 6V20" stroke={fill} />
        <path
          d="M17 9V3.61803C17 3.23926 16.786 2.893 16.4472 2.72361L13.6708 1.33541C13.2485 1.12426 12.7515 1.12426 12.3292 1.33541L7.55279 3.72361C7.214 3.893 7 4.23926 7 4.61803V18L12 20.5"
          stroke={fill}
        />
        <path d="M11 12L15 14L21 11" stroke={fill} />
        <path d="M15 14V22" stroke={fill} />
        <path
          d="M21 11.618V18.382C21 18.7607 20.786 19.107 20.4472 19.2764L15.6708 21.6646C15.2485 21.8757 14.7515 21.8757 14.3292 21.6646L11 20V12.618C11 12.2393 11.214 11.893 11.5528 11.7236L17 9L20.4472 10.7236C20.786 10.893 21 11.2393 21 11.618Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Chart;
