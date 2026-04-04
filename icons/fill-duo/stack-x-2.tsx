import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackX2({
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
          d="M11.7501 2H6.25009C5.28359 2 4.50009 2.7835 4.50009 3.75V14.25C4.50009 15.2165 5.28359 16 6.25009 16H11.7501C12.7166 16 13.5001 15.2165 13.5001 14.25V3.75C13.5001 2.7835 12.7166 2 11.7501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.7501 2C15.336 2 15.0001 2.3359 15.0001 2.75V15.25C15.0001 15.6641 15.336 16 15.7501 16C16.1642 16 16.5001 15.6641 16.5001 15.25V2.75C16.5001 2.3359 16.1642 2 15.7501 2Z"
          fill={fill}
        />
        <path
          d="M2.25009 2C1.83599 2 1.50009 2.3359 1.50009 2.75V15.25C1.50009 15.6641 1.83599 16 2.25009 16C2.66419 16 3.00009 15.6641 3.00009 15.25V2.75C3.00009 2.3359 2.66419 2 2.25009 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default StackX2;
