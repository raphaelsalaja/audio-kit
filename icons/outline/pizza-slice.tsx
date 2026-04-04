import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PizzaSlice({
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
        <circle cx="10" cy="8" fill={secondaryfill} r="1" stroke="none" />
        <path
          d="M7,12.75c.966,0,1.75-.783,1.75-1.75s-.784-1.75-1.75-1.75c-.659,0-1.227,.369-1.525,.907"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.495,6.691c-.213,0-.428-.054-.625-.168-2.969-1.718-6.771-1.718-9.739,0-.594,.345-1.361,.142-1.708-.456-.346-.597-.142-1.362,.456-1.708,3.728-2.157,8.516-2.157,12.243,0,.598,.346,.802,1.111,.456,1.708-.232,.4-.652,.624-1.083,.624Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.474,6.691l4.658,8.067c.385,.668,1.349,.666,1.733-.002L14.495,6.691"
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

export default PizzaSlice;
