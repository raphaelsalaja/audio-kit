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
          d="M9 1.5C4.86089 1.5 1.5 4.86089 1.5 9V10.35C1.5 13.745 4.25497 16.5 7.64999 16.5H12.51C14.5468 16.5 16.2284 14.9718 16.4702 13H9.17389C8.4265 13 7.76177 12.5253 7.51892 11.8186L6.31641 8.31865C5.926 7.18247 6.77027 6 7.9714 6H15.8749C14.7166 3.35221 12.0727 1.5 9 1.5Z"
          fill={fill}
        />
        <path
          d="M16.3497 7.5H7.9714C7.79974 7.5 7.67924 7.66894 7.73499 7.83115L8.9375 11.3312C8.97226 11.4322 9.06729 11.5 9.17389 11.5H16.5V9C16.5 8.48637 16.4483 7.98473 16.3497 7.5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default FlipUpHelmet;
