import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Brush2({
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
          d="m3.5833,9.75l-.6753,4.8623c-.0835.6013.3835,1.1377.9905,1.1377h10.203c.607,0,1.074-.5364.9905-1.1377l-.6753-4.8623H3.5833Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m11,12.75l.25,3"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m7,12.75l-.25,3"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.5,6.25l.2795-2.6556c.1071-1.0175-.6014-2.0011-1.6208-2.0877-1.1436-.0972-2.0666.8671-1.9492,1.9821l.2906,2.7612-2.009.287c-.8828.1261-1.5755.8215-1.6981,1.7048l-.8848,6.3707c-.0835.6012.3835,1.1376.9905,1.1376h10.203c.607,0,1.074-.5364.9905-1.1376l-.8848-6.3707c-.1227-.8833-.8153-1.5786-1.6981-1.7048l-2.009-.287Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="14.25"
          x2="3.75"
          y1="9.75"
          y2="9.75"
        />
      </g>
    </svg>
  );
}

export default Brush2;
