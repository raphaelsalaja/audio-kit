import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Archive({
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
          d="M15.9573 22.7005V17.0015L22.0915 14.1124V19.7718L15.9573 22.7005Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M22.0001 14L16.0167 16.913L12.0693 15.0941V17.7389L6.02934 15.0941L5.79878 11.8268L4.06365 10.9455L2.24357 10.0352L7.95567 7.04706L8.00001 10L17 14.5L17.0001 11.5L22.0001 14Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M16 17L22 14" stroke={fill} />
        <path
          d="M2 10L5.44721 11.7236C5.786 11.893 6 12.2393 6 12.618V14.382C6 14.7607 6.214 15.107 6.55279 15.2764L11.2764 17.6382C11.6088 17.8044 12 17.5627 12 17.191V15.4045C12 15.2187 12.1956 15.0978 12.3618 15.1809L16 17V23"
          stroke={fill}
        />
        <path
          d="M10.5625 7.28125L13.9375 8.96875"
          stroke={fill}
          strokeLinecap="round"
        />
        <path
          d="M8 7L2.55279 9.72361C2.214 9.893 2 10.2393 2 10.618V15.382C2 15.7607 2.214 16.107 2.55279 16.2764L15.3292 22.6646C15.7515 22.8757 16.2485 22.8757 16.6708 22.6646L21.4472 20.2764C21.786 20.107 22 19.7607 22 19.382V14.618C22 14.2393 21.786 13.893 21.4472 13.7236L17 11.5"
          stroke={fill}
        />
        <path
          d="M8 10V2.61803C8 1.87465 8.78231 1.39116 9.44721 1.72361L16.1708 5.08541C16.679 5.3395 17 5.85889 17 6.42705V14.5"
          stroke={fill}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default Archive;
