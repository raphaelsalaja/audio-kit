import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hexadecagon({
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
          d="M15.718,8.293l-1.468-1.468v-2.075c0-.552-.448-1-1-1h-2.075l-1.468-1.468c-.391-.39-1.024-.39-1.414,0l-1.468,1.468h-2.075c-.552,0-1,.448-1,1v2.075l-1.468,1.468c-.391,.39-.391,1.024,0,1.414l1.468,1.468v2.075c0,.552,.448,1,1,1h2.075l1.468,1.468c.391,.39,1.024,.39,1.414,0l1.468-1.468h2.075c.552,0,1-.448,1-1v-2.075l1.468-1.468c.391-.39,.391-1.024,0-1.414Z"
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

export default Hexadecagon;
