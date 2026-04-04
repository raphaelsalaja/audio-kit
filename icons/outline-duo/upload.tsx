import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Upload({
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
          d="M11.648 8H12.286C13.181 8 13.958 8.60004 14.162 9.43994L14.949 12.71C15.231 13.88 14.313 14.9999 13.073 14.9999H4.927C3.687 14.9999 2.77 13.88 3.051 12.71L3.838 9.43994C4.041 8.59994 4.818 8 5.713 8H6.352"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M12 7.75H12.413C13.342 7.75 14.149 8.39005 14.361 9.30005L15.178 12.8C15.471 14.05 14.518 15.25 13.23 15.25H4.76999C3.48199 15.25 2.52999 14.05 2.82199 12.8L3.63899 9.30005C3.84999 8.39005 4.65699 7.75 5.58699 7.75H5.99999"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 4.75L9 1.75L12 4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 2V12.5"
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

export default Upload;
