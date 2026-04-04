import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackX3({
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
          d="M15.7501 3.5C15.336 3.5 15.0001 3.8359 15.0001 4.25V13.75C15.0001 14.1641 15.336 14.5 15.7501 14.5C16.1642 14.5 16.5001 14.1641 16.5001 13.75V4.25C16.5001 3.8359 16.1642 3.5 15.7501 3.5Z"
          fill={fill}
        />
        <path
          d="M2.25009 3.5C1.83599 3.5 1.50009 3.8359 1.50009 4.25V13.75C1.50009 14.1641 1.83599 14.5 2.25009 14.5C2.66419 14.5 3.00009 14.1641 3.00009 13.75V4.25C3.00009 3.8359 2.66419 3.5 2.25009 3.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default StackX3;
