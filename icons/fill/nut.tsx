import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Nut({
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
          d="M16.317,7.62l-2.465-4.25c-.49-.845-1.402-1.37-2.378-1.37H6.527c-.977,0-1.888,.525-2.379,1.37L1.683,7.62c-.493,.851-.493,1.909,0,2.76l2.465,4.25c.49,.845,1.402,1.37,2.378,1.37h4.946c.977,0,1.888-.525,2.379-1.37l2.465-4.25c.493-.851,.493-1.909,0-2.76Zm-7.317,3.63c-1.243,0-2.25-1.007-2.25-2.25s1.007-2.25,2.25-2.25,2.25,1.007,2.25,2.25-1.007,2.25-2.25,2.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Nut;
