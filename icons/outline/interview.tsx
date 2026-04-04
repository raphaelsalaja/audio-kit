import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Interview({
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
          d="m10.75,1.25h-3.5c-.827,0-1.5.673-1.5,1.5v1.5c0,.827.673,1.5,1.5,1.5h.5v2l2.227-2h.773c.827,0,1.5-.673,1.5-1.5v-1.5c0-.827-.673-1.5-1.5-1.5Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m1.75,16.25v-1.5h1.353c.865,0,1.584-.668,1.646-1.532l.092-1.274,1.241-.496-1.238-1.651c0-2.255-1.508-4.159-3.57-4.757"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m2.5,10c.414,0,.75-.336.75-.75s-.336-.75-.75-.75-.75.336-.75.75.336.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m16.25,16.25v-1.5h-1.353c-.865,0-1.584-.668-1.646-1.532l-.092-1.274-1.241-.496,1.238-1.651c0-2.255,1.508-4.159,3.57-4.757"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m15.5,10c.414,0,.75-.336.75-.75s-.336-.75-.75-.75-.75.336-.75.75.336.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Interview;
