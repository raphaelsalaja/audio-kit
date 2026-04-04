import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GridLayout2({
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
          d="M14.2501 2H12.7501C11.7836 2 11.0001 2.7835 11.0001 3.75V6.25C11.0001 7.2165 11.7836 8 12.7501 8H14.2501C15.2166 8 16.0001 7.2165 16.0001 6.25V3.75C16.0001 2.7835 15.2166 2 14.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.25012 10H3.75012C2.78362 10 2.00012 10.7835 2.00012 11.75V14.25C2.00012 15.2165 2.78362 16 3.75012 16H5.25012C6.21662 16 7.00012 15.2165 7.00012 14.25V11.75C7.00012 10.7835 6.21662 10 5.25012 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.75012 2H3.75012C2.78362 2 2.00012 2.7835 2.00012 3.75V6.25C2.00012 7.2165 2.78362 8 3.75012 8H7.75012C8.71662 8 9.50012 7.2165 9.50012 6.25V3.75C9.50012 2.7835 8.71662 2 7.75012 2Z"
          fill={fill}
        />
        <path
          d="M14.2501 10H10.2501C9.28362 10 8.50012 10.7835 8.50012 11.75V14.25C8.50012 15.2165 9.28362 16 10.2501 16H14.2501C15.2166 16 16.0001 15.2165 16.0001 14.25V11.75C16.0001 10.7835 15.2166 10 14.2501 10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GridLayout2;
