import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleImage({
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
          d="M13.194,8.384c-1.072-1.072-2.816-1.072-3.889,0L3.726,13.964c1.322,1.404,3.193,2.286,5.274,2.286,3.266,0,6.025-2.159,6.933-5.128l-2.738-2.738Z"
          fill={secondaryfill}
        />
        <path
          d="M9,17c-4.411,0-8-3.589-8-8S4.589,1,9,1s8,3.589,8,8-3.589,8-8,8Zm0-14.5c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5,6.5-2.916,6.5-6.5-2.916-6.5-6.5-6.5Z"
          fill={fill}
        />
        <circle cx="6.25" cy="7.25" fill={secondaryfill} r="1.25" />
      </g>
    </svg>
  );
}

export default CircleImage;
