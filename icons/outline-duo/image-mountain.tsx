import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageMountain({
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
          d="M16.329 12.658L12.056 6.846C11.656 6.303 10.844 6.303 10.445 6.846L7.126 11.36L5.682 9.396C5.282 8.852 4.47 8.852 4.071 9.396L1.673 12.658C1.187 13.318 1.659 14.25 2.479 14.25H15.523C16.343 14.25 16.814 13.318 16.329 12.658Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.329 12.658L12.056 6.846C11.656 6.303 10.844 6.303 10.445 6.846L7.126 11.36L5.682 9.396C5.282 8.852 4.47 8.852 4.071 9.396L1.673 12.658C1.187 13.318 1.659 14.25 2.479 14.25H15.523C16.343 14.25 16.814 13.318 16.329 12.658Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.5 5.75C6.4665 5.75 7.25 4.9665 7.25 4C7.25 3.0335 6.4665 2.25 5.5 2.25C4.5335 2.25 3.75 3.0335 3.75 4C3.75 4.9665 4.5335 5.75 5.5 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ImageMountain;
