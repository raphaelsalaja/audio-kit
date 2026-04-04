import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaPlaylist({
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
          d="M8,16.182c-3.531-.487-6.25-3.517-6.25-7.182C1.75,4.996,4.996,1.75,9,1.75s7.25,3.246,7.25,7.25c0,.339-.023,.673-.068,1"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.152,8.568l-3.651-2.129c-.333-.194-.752,.046-.752,.432v4.259c0,.386,.419,.626,.752,.432l3.651-2.129c.331-.193,.331-.671,0-.864Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="10.75"
          x2="16.25"
          y1="16.25"
          y2="16.25"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="10.75"
          x2="16.25"
          y1="12.75"
          y2="12.75"
        />
      </g>
    </svg>
  );
}

export default MediaPlaylist;
