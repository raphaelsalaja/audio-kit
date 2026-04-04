import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Box({
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
          d="M13.25,5h-3.5v2.75c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-2.75h-3.5c-1.517,0-2.75,1.233-2.75,2.75v5.5c0,1.517,1.233,2.75,2.75,2.75H13.25c1.517,0,2.75-1.233,2.75-2.75V7.75c0-1.517-1.233-2.75-2.75-2.75ZM7.25,13.5h-2c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M8.25,1.5h-2.009c-1.052,0-1.996,.586-2.464,1.529l-.348,.703c.418-.138,.857-.231,1.321-.231h3.5V1.5Z"
          fill={secondaryfill}
        />
        <path
          d="M14.223,3.028c-.468-.942-1.412-1.528-2.464-1.528h-2.009V3.5h3.5c.464,0,.903,.093,1.322,.231l-.348-.703Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Box;
