import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AtmMachine({
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
          d="M3.25 5C2.83579 5 2.5 5.33579 2.5 5.75V14.25C2.5 15.7692 3.73079 17 5.25 17H12.75C14.2692 17 15.5 15.7692 15.5 14.25V5.75C15.5 5.33579 15.1642 5 14.75 5H3.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path d="M10 17V5H11.5V17H10Z" fill={fill} />
        <path
          d="M6.25 10C6.66421 10 7 10.3358 7 10.75V13.25C7 13.6642 6.66421 14 6.25 14C5.83579 14 5.5 13.6642 5.5 13.25V10.75C5.5 10.3358 5.83579 10 6.25 10Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 2.75C1 2.33579 1.33579 2 1.75 2H16.25C16.6642 2 17 2.33579 17 2.75C17 3.16421 16.6642 3.5 16.25 3.5H1.75C1.33579 3.5 1 3.16421 1 2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default AtmMachine;
