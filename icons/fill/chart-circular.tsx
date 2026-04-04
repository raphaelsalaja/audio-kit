import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartCircular({
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
          d="M9,1c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75c3.584,0,6.5,2.916,6.5,6.5s-2.916,6.5-6.5,6.5-6.5-2.916-6.5-6.5c0-1.282,.373-2.522,1.078-3.585,.229-.345,.135-.811-.21-1.04-.344-.228-.81-.135-1.04,.21-.869,1.31-1.328,2.836-1.328,4.415,0,4.411,3.589,8,8,8s8-3.589,8-8S13.411,1,9,1Z"
          fill={fill}
        />
        <path
          d="M9,14c2.757,0,5-2.243,5-5s-2.243-5-5-5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75c1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5-3.5-1.57-3.5-3.5c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75c0,2.757,2.243,5,5,5Z"
          fill={secondaryfill}
        />
        <path
          d="M9,9.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75c1.103,0,2-.897,2-2s-.897-2-2-2c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ChartCircular;
