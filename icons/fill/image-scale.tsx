import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageScale({
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
          d="m2.75,5.5c-.4141,0-.75-.3359-.75-.75,0-1.5166,1.2334-2.75,2.75-2.75.4141,0,.75.3359.75.75s-.3359.75-.75.75c-.6895,0-1.25.5605-1.25,1.25,0,.4141-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m15.25,5.5c-.4141,0-.75-.3359-.75-.75,0-.6895-.5605-1.25-1.25-1.25-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75c1.5166,0,2.75,1.2334,2.75,2.75,0,.4141-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m13.25,16c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75c.6895,0,1.25-.5605,1.25-1.25,0-.4141.3359-.75.75-.75s.75.3359.75.75c0,1.5166-1.2334,2.75-2.75,2.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m10.25,3.5h-2.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h2.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m15.25,11c-.4141,0-.75-.3359-.75-.75v-2.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v2.5c0,.4141-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m9.25,6.5h-5c-1.2407,0-2.25,1.0093-2.25,2.25v5c0,1.2407,1.0093,2.25,2.25,2.25h5c1.2407,0,2.25-1.0093,2.25-2.25v-5c0-1.2407-1.0093-2.25-2.25-2.25Zm-5,8c-.4136,0-.75-.3364-.75-.75v-3.7249c.0827-.0105.1644-.0251.25-.0251,2.6401,0,4.7837,1.9619,5.1519,4.5h-4.6519Zm4.75-4.5c-.5523,0-1-.4478-1-1s.4477-1,1-1,1,.4478,1,1-.4477,1-1,1Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ImageScale;
