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
        <rect
          height="3.5"
          width="5"
          fill={fill}
          rx="1.25"
          ry="1.25"
          strokeWidth="0"
          x="3.75"
          y="1"
        />
        <rect
          height="11.5"
          width="10.5"
          fill={secondaryfill}
          opacity=".4"
          rx="2.25"
          ry="2.25"
          strokeWidth="0"
          x="6.5"
          y="5.5"
        />
        <path
          d="m13.75,10.5h-4c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h4c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m13.75,13.5h-4c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h4c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8.25,3.5h1c.4131,0,.75.3364.75.75v1.25h1.5v-1.25c0-1.2407-1.0098-2.25-2.25-2.25h-1c-.4141,0-.75.3359-.75.75s.3359.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m6.5,12.5h-3.25c-.4131,0-.75-.3364-.75-.75v-7.5c0-.4136.3369-.75.75-.75h1c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-1c-1.2402,0-2.25,1.0093-2.25,2.25v7.5c0,1.2407,1.0098,2.25,2.25,2.25h3.25v-1.5Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ClipboardDocument;
