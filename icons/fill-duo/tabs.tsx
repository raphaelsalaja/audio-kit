import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tabs({
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
          d="M16.5001 4.75C16.5001 3.2314 15.2689 2 13.7501 2H11.5001V8H16.5001V4.75Z"
          fill={secondaryfill}
          opacity="0.2"
        />
        <path
          d="M11.5001 2H6.00012V8H11.5001V2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.7501 6H6.50012V2H4.25012C2.73132 2 1.50012 3.2312 1.50012 4.75V13.25C1.50012 14.7688 2.73132 16 4.25012 16H13.7501C15.2689 16 16.5001 14.7688 16.5001 13.25V6.75C16.5001 6.3358 16.1643 6 15.7501 6Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Tabs;
