import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ProgressBar({
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
          d="M14.2501 8H3.75012C1.68212 8 0.00012207 9.682 0.00012207 11.75C0.00012207 13.818 1.68212 15.5 3.75012 15.5H14.2501C16.3181 15.5 18.0001 13.818 18.0001 11.75C18.0001 9.682 16.3181 8 14.2501 8Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00011 6C8.58711 6 8.20211 5.79901 7.97111 5.46301L6.2141 2.909C5.9561 2.534 5.9291 2.05102 6.1451 1.65002C6.3611 1.24902 6.7821 0.999023 7.2441 0.999023H10.7561C11.2171 0.999023 11.6381 1.24802 11.8551 1.65002C12.0721 2.05202 12.0441 2.534 11.7861 2.909L10.0301 5.46198C9.79911 5.79798 9.4141 5.99902 9.0011 5.99902L9.00011 6Z"
          fill={fill}
        />
        <path
          d="M9.00012 12.5H3.75012C3.33612 12.5 3.00012 12.164 3.00012 11.75C3.00012 11.336 3.33612 11 3.75012 11H9.00012C9.41412 11 9.75012 11.336 9.75012 11.75C9.75012 12.164 9.41412 12.5 9.00012 12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ProgressBar;
