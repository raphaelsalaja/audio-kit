import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Loader6({
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
          d="m9,17c-4.4111,0-8-3.5889-8-8S4.5889,1,9,1s8,3.5889,8,8-3.5889,8-8,8Zm0-14.5c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5,6.5-2.916,6.5-6.5-2.916-6.5-6.5-6.5Z"
          fill={fill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m16.25,9.75c-.4141,0-.75-.3359-.75-.75,0-3.584-2.916-6.5-6.5-6.5-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75c4.4111,0,8,3.5889,8,8,0,.4141-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Loader6;
