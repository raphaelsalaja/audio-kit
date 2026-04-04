import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StarMinus({
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
          d="m11.24,6.289l-2.24-4.539-2.24,4.539-5.01.728,3.625,3.534-.856,4.989,3.9892-2.0965c-.0054-.0638-.0082-.1283-.0082-.1935,0-1.2426,1.0074-2.25,2.25-2.25h2.2147l-.3397-.449,3.625-3.534-5.01-.728Zm2.2341,9.211h-.0692l.0761.04-.0069-.04Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="15.75"
          x2="10.75"
          y1="13.25"
          y2="13.25"
        />
        <polyline
          fill="none"
          points="12.9337 10.25 16.25 7.017 11.24 6.29 9 1.75 6.76 6.29 1.75 7.017 5.375 10.551 4.519 15.54 7.8034 13.8135"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default StarMinus;
