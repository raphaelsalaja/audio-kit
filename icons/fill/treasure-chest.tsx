import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TreasureChest({
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
          d="m6,9v6.5h6v-6.5h-2.25v1.25c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-1.25h-2.25Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m13.5,4.75v2.75h3.5v-.25c0-2.4395-1.8555-4.4319-4.2253-4.697.451.6189.7253,1.3743.7253,2.197Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9.75,2.5h-1.5c-1.2402,0-2.25,1.0093-2.25,2.25v2.75h6v-2.75c0-1.2407-1.0098-2.25-2.25-2.25Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m4.5,7.5v-2.75c0-.8228.2743-1.5781.7253-2.197-2.3699.2651-4.2253,2.2576-4.2253,4.697v.25h3.5Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m13.5,9v6.5h.75c1.5166,0,2.75-1.2334,2.75-2.75v-3.75h-3.5Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m4.5,9H1v3.75c0,1.5166,1.2334,2.75,2.75,2.75h.75v-6.5Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default TreasureChest;
