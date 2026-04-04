import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Repeat5({
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
          d="m9.25,9.5h-4c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h4c.689,0,1.25-.561,1.25-1.25V2.75c0-.689-.561-1.25-1.25-1.25H2.75c-.689,0-1.25.561-1.25,1.25v4c0,.624.471,1.153,1.095,1.231.411.051.703.426.651.837-.053.411-.434.698-.837.651-1.374-.172-2.409-1.341-2.409-2.719V2.75C0,1.233,1.233,0,2.75,0h6.5c1.517,0,2.75,1.233,2.75,2.75v4c0,1.517-1.233,2.75-2.75,2.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m7.5,12c-.192,0-.384-.073-.53-.22l-2.5-2.5c-.293-.293-.293-.768,0-1.061l2.5-2.5c.293-.293.768-.293,1.061,0s.293.768,0,1.061l-1.97,1.97,1.97,1.97c.293.293.293.768,0,1.061-.146.146-.338.22-.53.22Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Repeat5;
