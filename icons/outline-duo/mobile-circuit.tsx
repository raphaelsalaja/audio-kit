import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MobileCircuit({
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
          d="m12.25,14.5c0-.8809.6533-1.6025,1.5-1.7249V3.75c0-1.1045-.8954-2-2-2h-6.5c-1.1046,0-2,.8955-2,2v10.5c0,1.1045.8954,2,2,2h6.5c.438,0,.8397-.1448,1.1691-.3835-.4045-.3206-.6691-.8103-.6691-1.3665Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m10,2h-3v.75h3v-.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15,6.5c-.966,0-1.75.7835-1.75,1.75s.784,1.75,1.75,1.75,1.75-.7835,1.75-1.75-.784-1.75-1.75-1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13.25,8.25h-3.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m14,16.25c-.966,0-1.75-.7835-1.75-1.75s.784-1.75,1.75-1.75,1.75.7835,1.75,1.75-.784,1.75-1.75,1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13.7429,3.6799c-.0377-1.0715-.9123-1.9299-1.9929-1.9299h-6.5c-1.1046,0-2,.8955-2,2v10.5c0,1.1045.8954,2,2,2h4.3678"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9.75,11.75h1.086c.265,0,.519.105.707.293l1.22,1.22"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MobileCircuit;
