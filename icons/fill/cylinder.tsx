import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cylinder({
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
          d="M13.5,4.25v7.636c-2.306-1.125-6.694-1.125-9,0V4.25h-1.5V13.75c0,1.805,3.019,2.75,6,2.75s6-.945,6-2.75V4.25h-1.5Zm-4.5,10.75c-2.953,0-4.5-.929-4.5-1.25s1.547-1.25,4.5-1.25,4.5,.929,4.5,1.25-1.547,1.25-4.5,1.25Z"
          fill={fill}
        />
        <path
          d="M3,4.25c0,1.805,3.019,2.75,6,2.75s6-.945,6-2.75C15,.64,3,.64,3,4.25Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Cylinder;
