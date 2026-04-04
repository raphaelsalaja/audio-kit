import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Img4k({
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
          d="m2.762,15.989l6.074-6.075c.7809-.781,2.047-.781,2.8279-.0001l2.5861,2.5861v1.75c0,1.1046-.8954,2-2,2H4l-1.238-.261Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m2.762,15.989l6.074-6.075c.781-.781,2.047-.781,2.828,0l2.586,2.586"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m5.25,9.5c.69,0,1.25-.5596,1.25-1.25s-.56-1.25-1.25-1.25-1.25.5596-1.25,1.25.56,1.25,1.25,1.25Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m4.0452,3.75h-.2952c-1.105,0-2,.8955-2,2v8.5c0,1.1045.895,2,2,2h8.5c1.105,0,2-.8955,2-2v-5.2931"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="11.5 4.75 7 4.75 7 4.2685 9.875 .75 10.25 .75 10.25 6"
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
          x1="13.75"
          x2="13.75"
          y1=".75"
          y2="6"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="17.25"
          x2="13.75"
          y1=".75"
          y2="4.3578"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="17.25"
          x2="15.2098"
          y1="6"
          y2="2.8919"
        />
      </g>
    </svg>
  );
}

export default Img4k;
