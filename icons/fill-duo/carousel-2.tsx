import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Carousel2({
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
          d="M5.00012 4.5396L2.24132 3.35801C1.85362 3.19251 1.41121 3.2325 1.06061 3.4654C0.710008 3.6973 0.500122 4.087 0.500122 4.5079V13.4913C0.500122 13.9122 0.710108 14.3018 1.06061 14.5338C1.26861 14.6715 1.50882 14.7418 1.75012 14.7418C1.91612 14.7418 2.08411 14.7081 2.24231 14.6407L5.00012 13.4595V4.5396Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.0001 4.5396L15.7589 3.35801C16.1466 3.19251 16.589 3.2325 16.9396 3.4654C17.2902 3.6973 17.5001 4.087 17.5001 4.5079V13.4913C17.5001 13.9122 17.2901 14.3018 16.9396 14.5338C16.7316 14.6715 16.4914 14.7418 16.2501 14.7418C16.0841 14.7418 15.9161 14.7081 15.7579 14.6407L13.0001 13.4595V4.5396Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.7501 2H6.25012C5.28362 2 4.50012 2.7835 4.50012 3.75V14.25C4.50012 15.2165 5.28362 16 6.25012 16H11.7501C12.7166 16 13.5001 15.2165 13.5001 14.25V3.75C13.5001 2.7835 12.7166 2 11.7501 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Carousel2;
