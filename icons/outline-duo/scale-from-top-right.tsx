import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScaleFromTopRight({
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
          d="M15.25 8.25L10.75 8.25C10.1977 8.25 9.75 7.80229 9.75 7.25L9.75 2.75L13.25 2.75C14.3546 2.75 15.25 3.64543 15.25 4.75L15.25 8.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.75 2.75V7.25C9.75 7.802 10.198 8.25 10.75 8.25H15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 15.25L13.25 15.25C14.3546 15.25 15.25 14.3546 15.25 13.25L15.25 4.75C15.25 3.64543 14.3546 2.75 13.25 2.75L4.75 2.75C3.64543 2.75 2.75 3.64543 2.75 4.75L2.75 13.25C2.75 14.3546 3.64543 15.25 4.75 15.25Z"
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

export default ScaleFromTopRight;
