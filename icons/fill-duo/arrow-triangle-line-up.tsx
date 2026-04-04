import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineUp({
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
          d="M9 16.5C8.586 16.5 8.25 16.164 8.25 15.75V7.75C8.25 7.336 8.586 7 9 7C9.414 7 9.75 7.336 9.75 7.75V15.75C9.75 16.164 9.414 16.5 9 16.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.035 2.033C9.569 1.345 8.431 1.345 7.965 2.033L4.907 6.55C4.647 6.934 4.621 7.42701 4.838 7.83701C5.055 8.24701 5.479 8.50102 5.942 8.50102H12.057C12.52 8.50102 12.944 8.24701 13.161 7.83701C13.378 7.42801 13.352 6.935 13.092 6.55L10.034 2.033H10.035Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTriangleLineUp;
