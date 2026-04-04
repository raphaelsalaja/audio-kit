import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FlipUpHelmet({
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
          d="M1.5 9C1.5 4.86089 4.86089 1.5 9 1.5C13.1391 1.5 16.5 4.86089 16.5 9V12.51C16.5 14.7127 14.7127 16.5 12.51 16.5H7.64999C4.25497 16.5 1.5 13.745 1.5 10.35V9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.8749 6C16.2769 6.9189 16.5 7.93362 16.5 9V12.51C16.5 12.6759 16.4899 12.8394 16.4702 13H9.1739C8.42651 13 7.76178 12.5253 7.51893 11.8186L6.3164 8.3186C5.92599 7.18242 6.77028 6 7.97141 6H15.8749Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FlipUpHelmet;
