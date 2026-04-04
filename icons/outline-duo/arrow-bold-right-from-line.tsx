import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldRightFromLine({
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
          d="M10.561 13.854L16.166 9.39102C16.417 9.19102 16.417 8.80902 16.166 8.60902L10.561 4.14602C10.233 3.88502 9.75 4.11802 9.75 4.53702V6.75002H5.75C5.198 6.75002 4.75 7.19802 4.75 7.75002V10.25C4.75 10.802 5.198 11.25 5.75 11.25H9.75V13.463C9.75 13.882 10.234 14.115 10.561 13.854Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.561 13.854L16.166 9.39102C16.417 9.19102 16.417 8.80902 16.166 8.60902L10.561 4.14602C10.233 3.88502 9.75 4.11802 9.75 4.53702V6.75002H5.75C5.198 6.75002 4.75 7.19802 4.75 7.75002V10.25C4.75 10.802 5.198 11.25 5.75 11.25H9.75V13.463C9.75 13.882 10.234 14.115 10.561 13.854Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 11.25V6.75"
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

export default ArrowBoldRightFromLine;
