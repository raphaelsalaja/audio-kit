import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Views({
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
        <rect
          height="10.5"
          width="13.5"
          fill="none"
          rx="2"
          ry="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x="2.25"
          y="2.75"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="4.75"
          x2="13.25"
          y1="16.25"
          y2="16.25"
        />
        <path
          d="M12.691,7.108c-.54-.694-1.736-1.858-3.691-1.858s-3.151,1.164-3.691,1.859c-.413,.533-.413,1.249,0,1.782,0,0,0,0,0,0,.54,.694,1.736,1.858,3.691,1.858s3.151-1.164,3.691-1.859c.413-.533,.413-1.249,0-1.783Zm-3.691,2.392c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5,.672,1.5,1.5-.672,1.5-1.5,1.5Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Views;
