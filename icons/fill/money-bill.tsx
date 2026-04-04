import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoneyBill({
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
          d="m14.25,3H3.75c-1.517,0-2.75,1.233-2.75,2.75v6.5c0,1.517,1.233,2.75,2.75,2.75h10.5c1.517,0,2.75-1.233,2.75-2.75v-6.5c0-1.517-1.233-2.75-2.75-2.75Zm-10.25,7c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm5,1.25c-1.243,0-2.25-1.007-2.25-2.25s1.007-2.25,2.25-2.25,2.25,1.007,2.25,2.25-1.007,2.25-2.25,2.25Zm5-1.25c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default MoneyBill;
