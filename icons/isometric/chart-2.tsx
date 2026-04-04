import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Chart2({
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
          d="M5 12.75L1.5 11L5 8.75V12.75Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M1 11L5 13" stroke={fill} />
        <path
          d="M6 17.5L1.55279 15.2764C1.214 15.107 1 14.7607 1 14.382V11.618C1 11.2393 1.214 10.893 1.55279 10.7236L5 9"
          stroke={fill}
        />
        <path
          d="M13 14V8L19 5V11L13 14Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M17 23V16L23 13V20L17 23Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M9 6L13 8L19 5" stroke={fill} />
        <path d="M13 14L17 16L23 13" stroke={fill} />
        <path d="M17 16V22.5" stroke={fill} />
        <path d="M5 6L9 8" stroke={fill} />
        <path d="M13 8V21" stroke={fill} />
        <path
          d="M19 11V5.61803C19 5.23926 18.786 4.893 18.4472 4.72361L15.6708 3.33541C15.2485 3.12426 14.7515 3.12426 14.3292 3.33541L9.55279 5.72361C9.214 5.893 9 6.23926 9 6.61803V19L13 21"
          stroke={fill}
        />
        <path
          d="M23 13.618V19.382C23 19.7607 22.786 20.107 22.4472 20.2764L17.6708 22.6646C17.2485 22.8757 16.7515 22.8757 16.3292 22.6646L13 21V14.618C13 14.2393 13.214 13.893 13.5528 13.7236L19 11L22.4472 12.7236C22.786 12.893 23 13.2393 23 13.618Z"
          stroke={fill}
        />
        <path
          d="M10 19.5L5 17V6.61803C5 6.23926 5.214 5.893 5.55279 5.72361L10.3292 3.33541C10.7515 3.12426 11.2485 3.12426 11.6708 3.33541L13 4"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Chart2;
