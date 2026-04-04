import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MusicNote2({
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
          d="M6.75 16.25C8.40685 16.25 9.75 14.9069 9.75 13.25C9.75 11.5931 8.40685 10.25 6.75 10.25C5.09315 10.25 3.75 11.5931 3.75 13.25C3.75 14.9069 5.09315 16.25 6.75 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.75 13.25V1.75C9.75 1.75 11.5 4.5 14.25 6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 16.25C8.40685 16.25 9.75 14.9069 9.75 13.25C9.75 11.5931 8.40685 10.25 6.75 10.25C5.09315 10.25 3.75 11.5931 3.75 13.25C3.75 14.9069 5.09315 16.25 6.75 16.25Z"
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

export default MusicNote2;
