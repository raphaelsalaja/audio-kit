import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RectLayoutGrid5({
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
          d="M6 9H17.0001V4.75C17.0001 3.233 15.7671 2 14.2501 2H6V9Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path d="M11.5 9H6V16H11.5V9Z" fill={fill} />
        <path
          d="M11.5 9V16H14.2501C15.7671 16 17.0001 14.767 17.0001 13.25V9H11.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6 2L3.75006 2C2.23306 2 1.00006 3.233 1.00006 4.75V13.25C1.00006 14.767 2.23306 16 3.75006 16H6V2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default RectLayoutGrid5;
