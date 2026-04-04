import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TouchClick2({
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
          d="m10.75,9.25c0-.69-.564-1.25-1.25-1.25s-1.25.56-1.25,1.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13.25,9.75c0-.69-.564-1.25-1.25-1.25-.5615,0-1.1216.3392-1.25.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m8.25,9.25v-4.25c0-.69-.564-1.25-1.25-1.25s-1.25.56-1.25,1.25v7.215l-1.768-2.252c-.426-.543-1.215-.635-1.755-.211s-.604,1.131-.211,1.755l1.96,3.014c1.107,1.703,3,2.73,5.03,2.73h1.745c2.761,0,5-2.239,5-5v-2.001c0-.69-.564-1.25-1.25-1.25-.5719,0-1.0108.25-1.251.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m2.9991,6.4371c-.1613-.4489-.2491-.9327-.2491-1.4371C2.75,2.6528,4.6528.75,7,.75s4.25,1.9028,4.25,4.25c0,.1189-.0049.2366-.0144.353"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default TouchClick2;
