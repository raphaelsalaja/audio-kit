import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function House4({
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
          d="M14.855 5.95L9.605 1.96C9.247 1.688 8.752 1.688 8.395 1.96L3.145 5.95C2.896 6.139 2.75 6.434 2.75 6.747V14.251C2.75 15.356 3.645 16.251 4.75 16.251H7.25V12.251C7.25 11.699 7.698 11.251 8.25 11.251H9.75C10.302 11.251 10.75 11.699 10.75 12.251V16.251H13.25C14.355 16.251 15.25 15.356 15.25 14.251V6.746C15.25 6.433 15.104 6.14 14.855 5.95Z"
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

export default House4;
