import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCopy({
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
          d="M11.0001 5C7.68641 5 5.00011 7.6863 5.00011 11C5.00011 14.3137 7.68641 17 11.0001 17C14.3138 17 17.0001 14.3137 17.0001 11C17.0001 7.6863 14.3138 5 11.0001 5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.00011 11C5.00011 7.68629 7.68641 4.99999 11.0001 4.99999C11.6063 4.99999 12.1915 5.08988 12.743 5.25706C11.9963 2.79338 9.70765 0.999993 7.00011 0.999993C3.68641 0.999993 1.00011 3.68629 1.00011 6.99999C1.00011 9.70753 2.79349 11.9962 5.25718 12.7429C5.09 12.1913 5.00011 11.6062 5.00011 11Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleCopy;
