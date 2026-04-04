import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PizzaSlice2({
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
        <circle cx="8" cy="9" fill={secondaryfill} r="1" stroke="none" />
        <path
          d="M3.75,9.451c.221-.128,.477-.201,.75-.201,.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5c-.273,0-.53-.073-.75-.201"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75,5c3.979,0,7.452,2.161,9.311,5.374"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25,15.25v-.655c0-.385-.417-.625-.75-.433l-1.25,.722c-.667,.385-1.5-.096-1.5-.866V3.294c0-.592,.512-1.047,1.103-.999,4.145,.335,7.762,2.543,10.002,5.776,.336,.486,.194,1.156-.317,1.451l-3.787,2.186c-.619,.357-1,1.018-1,1.732v2.809"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default PizzaSlice2;
