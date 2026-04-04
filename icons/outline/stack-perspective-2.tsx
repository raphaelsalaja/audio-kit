import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackPerspective2({
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
          d="M13.75,13.375l.691,.146c.932,.196,1.809-.515,1.809-1.468V4.619c0-.709-.497-1.322-1.191-1.468l-6.5-1.368c-.712-.15-1.388,.231-1.669,.843"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.559,4.479l6.5,1.368c.694,.146,1.191,.758,1.191,1.468v7.434c0,.953-.877,1.664-1.809,1.468l-6.5-1.368c-.694-.146-1.191-.758-1.191-1.468V5.947c0-.953,.877-1.664,1.809-1.468Z"
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

export default StackPerspective2;
