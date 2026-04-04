import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridRectCircle({
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
          d="M13.0001 8.25C14.795 8.25 16.2501 6.79493 16.2501 5C16.2501 3.20507 14.795 1.75 13.0001 1.75C11.2052 1.75 9.75009 3.20507 9.75009 5C9.75009 6.79493 11.2052 8.25 13.0001 8.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.00009 16.25C6.79502 16.25 8.25009 14.7949 8.25009 13C8.25009 11.2051 6.79502 9.75 5.00009 9.75C3.20517 9.75 1.75009 11.2051 1.75009 13C1.75009 14.7949 3.20517 16.25 5.00009 16.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.25009 2H3.75009C2.78359 2 2.00009 2.7835 2.00009 3.75V6.25C2.00009 7.2165 2.78359 8 3.75009 8H6.25009C7.21659 8 8.00009 7.2165 8.00009 6.25V3.75C8.00009 2.7835 7.21659 2 6.25009 2Z"
          fill={fill}
        />
        <path
          d="M14.2501 10H11.7501C10.7836 10 10.0001 10.7835 10.0001 11.75V14.25C10.0001 15.2165 10.7836 16 11.7501 16H14.2501C15.2166 16 16.0001 15.2165 16.0001 14.25V11.75C16.0001 10.7835 15.2166 10 14.2501 10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GridRectCircle;
