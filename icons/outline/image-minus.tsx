import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageMinus({
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
          d="M3.763 14.989L9.83701 8.914C10.618 8.133 11.884 8.133 12.665 8.914L15.251 11.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25098 8.5C6.94098 8.5 7.50098 7.9404 7.50098 7.25C7.50098 6.5596 6.94098 6 6.25098 6C5.56098 6 5.00098 6.5596 5.00098 7.25C5.00098 7.9404 5.56098 8.5 6.25098 8.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8.92236 2.75H4.75098C3.64598 2.75 2.75098 3.6455 2.75098 4.75V13.25C2.75098 14.3545 3.64598 15.25 4.75098 15.25H13.251C14.356 15.25 15.251 14.3545 15.251 13.25V6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.751 3.75H11.751"
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

export default ImageMinus;
