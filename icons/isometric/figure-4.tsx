import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Figure4({
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
          d="M16 20V14L22 11V17L16 20Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M16 14L22 11" stroke={fill} />
        <path d="M2 7L16 14V20" stroke={fill} />
        <path
          d="M2 12.382V7.61803C2 7.23926 2.214 6.893 2.55279 6.72361L7.32918 4.33541C7.75147 4.12426 8.24853 4.12426 8.67082 4.33541L21.4472 10.7236C21.786 10.893 22 11.2393 22 11.618V16.382C22 16.7607 21.786 17.107 21.4472 17.2764L16.6708 19.6646C16.2485 19.8757 15.7515 19.8757 15.3292 19.6646L2.55279 13.2764C2.214 13.107 2 12.7607 2 12.382Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Figure4;
