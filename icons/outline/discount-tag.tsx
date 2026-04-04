import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DiscountTag({
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
          d="m3.25,2.25h4.922c.53,0,1.039.211,1.414.586l5.75,5.75c.781.781.781,2.047,0,2.828l-3.922,3.922c-.781.781-2.047.781-2.828,0l-5.75-5.75c-.375-.375-.586-.884-.586-1.414V3.25c0-.552.448-1,1-1Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m8.543,7.2073c.3903.3903,1.0239.3903,1.4142,0s.3903-1.0239,0-1.4142-1.0239-.3903-1.4142,0-.3903,1.0239,0,1.4142Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m8.543,12.7073c.3903.3903,1.0239.3903,1.4142,0s.3903-1.0239,0-1.4142-1.0239-.3903-1.4142,0-.3903,1.0239,0,1.4142Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m6.25,9.25h6"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default DiscountTag;
