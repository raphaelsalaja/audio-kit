import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartLock({
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
          d="m15.25,12.75h-4c-.5523,0-1,.4477-1,1v1.5c0,.5523.4477,1,1,1h4c.5523,0,1-.4477,1-1v-1.5c0-.5523-.4477-1-1-1Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m11.75,12.75v-1.5c0-.828.672-1.5,1.5-1.5h0c.828,0,1.5.672,1.5,1.5v1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m8,14.4854v-.7354c0-1.1294.5972-2.1494,1.5073-2.7324.1201-1.96,1.7529-3.5176,3.7427-3.5176.8385,0,1.6581.2998,2.2824.7676,0,0,.4667-1.0064.4667-1.6588.008-2.1199-1.704-3.8459-3.826-3.8589-1.277.0161-2.464.6599-3.173,1.72-.71-1.0601-1.897-1.7039-3.173-1.72-2.123.0129-3.834,1.739-3.826,3.8589,0,4.3699,3.7914,7.0562,5.7254,8.1634l.2735-.2869Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m15.9214,7.631c.0509-.3304.0786-.6709.0786-1.0221.008-2.1199-1.704-3.8459-3.827-3.8589-1.277.0161-2.464.6599-3.173,1.72-.71-1.061-1.896-1.7039-3.173-1.72-2.123.0129-3.834,1.739-3.827,3.8589,0,3.8755,3.1931,6.5483,5.2659,7.8765"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <rect
          height="3.5"
          width="6"
          fill="none"
          rx="1"
          ry="1"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="10.25"
          y="12.75"
        />
      </g>
    </svg>
  );
}

export default HeartLock;
