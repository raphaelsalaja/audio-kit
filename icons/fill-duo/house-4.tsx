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
          d="M10.059 1.5L15.309 5.489C15.741 5.818 16 6.339 16 6.883L16 14.25C16 15.767 14.767 17 13.25 17H4.75001C3.23301 17 2.00001 15.767 2.00001 14.25L2 6.883C2 6.339 2.258 5.818 2.691 5.489L7.941 1.5C8.564 1.026 9.435 1.025 10.059 1.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 17V12.251C6.5 11.2848 7.28379 10.501 8.25 10.501H9.75C10.7162 10.501 11.5 11.2848 11.5 12.251V17H6.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default House4;
