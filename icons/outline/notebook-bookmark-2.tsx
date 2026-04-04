import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function NotebookBookmark2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m7.36,5.36l-1.36-1.36-1.36,1.36c-.236.236-.64.069-.64-.265V.75h4v4.345c0,.334-.404.501-.64.265Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <rect
          height="8.5"
          width="10.5"
          fill="none"
          rx="2"
          ry="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          transform="translate(12) rotate(90)"
          x=".75"
          y="1.75"
        />
      </g>
    </svg>
  );
}

export default NotebookBookmark2;
