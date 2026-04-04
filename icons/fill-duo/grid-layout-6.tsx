import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridLayout6({
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
          d="M6.25012 2H3.75012C2.78362 2 2.00012 2.7835 2.00012 3.75V14.25C2.00012 15.2165 2.78362 16 3.75012 16H6.25012C7.21662 16 8.00012 15.2165 8.00012 14.25V3.75C8.00012 2.7835 7.21662 2 6.25012 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.2501 10H11.7501C10.7836 10 10.0001 10.7835 10.0001 11.75V14.25C10.0001 15.2165 10.7836 16 11.7501 16H14.2501C15.2166 16 16.0001 15.2165 16.0001 14.25V11.75C16.0001 10.7835 15.2166 10 14.2501 10Z"
          fill={fill}
        />
        <path
          d="M14.2501 2H11.7501C10.7836 2 10.0001 2.7835 10.0001 3.75V6.25C10.0001 7.2165 10.7836 8 11.7501 8H14.2501C15.2166 8 16.0001 7.2165 16.0001 6.25V3.75C16.0001 2.7835 15.2166 2 14.2501 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GridLayout6;
