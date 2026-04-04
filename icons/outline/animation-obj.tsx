import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AnimationObj({
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
          d="M15.7098 7.69609L12.554 4.54119C11.8338 3.82099 10.6662 3.82099 9.94601 4.54119L6.79021 7.69609C6.07001 8.41629 6.07001 9.58479 6.79021 10.305L9.94601 13.4608C10.6663 14.181 11.8338 14.181 12.554 13.4608L15.7098 10.305C16.4301 9.58479 16.4301 8.41629 15.7098 7.69609Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.00001 4L2.29021 7.6961C1.57001 8.4163 1.57001 9.5848 2.29021 10.305L6.00001 14"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default AnimationObj;
