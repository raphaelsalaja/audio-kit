import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Grid3x3({
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
          d="M15.7501 7H2.25009C1.83599 7 1.50009 6.6641 1.50009 6.25C1.50009 5.8359 1.83599 5.5 2.25009 5.5H15.7501C16.1642 5.5 16.5001 5.8359 16.5001 6.25C16.5001 6.6641 16.1642 7 15.7501 7Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.7501 12.5H2.25009C1.83599 12.5 1.50009 12.1641 1.50009 11.75C1.50009 11.3359 1.83599 11 2.25009 11H15.7501C16.1642 11 16.5001 11.3359 16.5001 11.75C16.5001 12.1641 16.1642 12.5 15.7501 12.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.25009 16.5C5.83599 16.5 5.50009 16.1641 5.50009 15.75V2.25C5.50009 1.8359 5.83599 1.5 6.25009 1.5C6.66419 1.5 7.00009 1.8359 7.00009 2.25V15.75C7.00009 16.1641 6.66419 16.5 6.25009 16.5Z"
          fill={fill}
        />
        <path
          d="M11.7501 16.5C11.336 16.5 11.0001 16.1641 11.0001 15.75V2.25C11.0001 1.8359 11.336 1.5 11.7501 1.5C12.1642 1.5 12.5001 1.8359 12.5001 2.25V15.75C12.5001 16.1641 12.1642 16.5 11.7501 16.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Grid3x3;
