import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RockOn({
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
          d="m8.25,6.5v-3.501c0-.69-.564-1.25-1.25-1.25s-1.25.56-1.25,1.25v7.715l-1.768-2.252c-.426-.543-1.215-.635-1.755-.211s-.604,1.131-.211,1.755l1.96,3.014c1.107,1.703,3,2.73,5.03,2.73h1.745c2.761,0,5-2.239,5-5v-2.001h-.001V3.999c0-.69-.564-1.25-1.25-1.25s-1.25.56-1.25,1.25v2.502l-5-.001Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m8.25,7.249V2.999c0-.69-.564-1.25-1.25-1.25s-1.25.56-1.25,1.25v7.715l-1.768-2.252c-.426-.543-1.215-.635-1.755-.211s-.604,1.131-.211,1.755l1.96,3.014c1.107,1.703,3,2.73,5.03,2.73h1.745c2.761,0,5-2.239,5-5v-2.001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.75,8.749V3.999c0-.69-.564-1.25-1.25-1.25s-1.25.56-1.25,1.25v3.251"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9.5005,10.7495c.6902-.0003,1.2495-.5598,1.2495-1.25v-2.0005c0-.69-.564-1.25-1.25-1.25s-1.25.56-1.25,1.25v2.0005c0,.6906.5599,1.2503,1.2505,1.25h0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m12.0005,10.7495c.6902-.0003,1.2495-.5598,1.2495-1.25v-2.0005c0-.69-.564-1.25-1.25-1.25s-1.25.56-1.25,1.25v2.0005c0,.6906.5599,1.2503,1.2505,1.25h0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="1.5 3.25 2.25 1 1 3.25 3.25 3.25 2 5.5 2.75 3.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default RockOn;
