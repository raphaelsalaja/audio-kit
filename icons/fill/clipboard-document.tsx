import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClipboardDocument({
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
          d="m10.75,7c-.4141,0-.75-.3359-.75-.75v-2c0-.4136-.3369-.75-.75-.75h-1c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h1c1.2402,0,2.25,1.0093,2.25,2.25v2c0,.4141-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m7,14h-3.75c-1.2402,0-2.25-1.0093-2.25-2.25v-7.5c0-1.2407,1.0098-2.25,2.25-2.25h1c.4141,0,.75.3359.75.75s-.3359.75-.75.75h-1c-.4131,0-.75.3364-.75.75v7.5c0,.4136.3369.75.75.75h3.75c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m14.75,5.5h-6c-1.2402,0-2.25,1.0093-2.25,2.25v7c0,1.2407,1.0098,2.25,2.25,2.25h6c1.2402,0,2.25-1.0093,2.25-2.25v-7c0-1.2407-1.0098-2.25-2.25-2.25Zm-1,8h-4c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h4c.4141,0,.75.3359.75.75s-.3359.75-.75.75Zm0-3h-4c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h4c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <rect
          height="3.5"
          width="5"
          fill={secondaryfill}
          rx="1.25"
          ry="1.25"
          strokeWidth="0"
          x="3.75"
          y="1"
        />
      </g>
    </svg>
  );
}

export default ClipboardDocument;
