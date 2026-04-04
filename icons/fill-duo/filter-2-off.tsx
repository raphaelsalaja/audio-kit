import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Filter2Off({
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
          d="M7 9.568V11L15.78 2.22C15.644 2.084 15.457 2 15.25 2H2.75C2.336 2 2 2.336 2 2.75V4.535C2 5.053 2.227 5.541 2.622 5.873L7 9.568Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7 14.182V16.25C7 16.664 7.336 17 7.75 17H10.25C10.664 17 11 16.664 11 16.25V10.182L7 14.182Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1.99999 16.75C1.80799 16.75 1.61599 16.677 1.46999 16.53C1.17699 16.237 1.17699 15.762 1.46999 15.469L15.72 1.21999C16.013 0.926994 16.488 0.926994 16.781 1.21999C17.074 1.51299 17.074 1.98799 16.781 2.28099L2.52999 16.53C2.38399 16.676 2.19199 16.75 1.99999 16.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Filter2Off;
