import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Magnifier4({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m10.75,11.5c-.192,0-.384-.073-.53-.22l-3.098-3.098c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l3.098,3.098c.293.293.293.768,0,1.061-.146.146-.338.22-.53.22Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m5,9.5C2.519,9.5.5,7.481.5,5S2.519.5,5,.5s4.5,2.019,4.5,4.5-2.019,4.5-4.5,4.5Zm0-7.5c-1.654,0-3,1.346-3,3s1.346,3,3,3,3-1.346,3-3-1.346-3-3-3Z"
          fill={fill}
          strokeWidth="0"
        />
        <circle cx="5" cy="5" fill={fill} r="1.5" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default Magnifier4;
