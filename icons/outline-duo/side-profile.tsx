import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SideProfile({
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
          d="M11.25 16.5V13.75H12.889C13.938 13.75 14.808 12.94 14.884 11.894L14.996 10.351L16.5 9.74999L15 7.74999C15 4.01399 11.585 1.07499 7.707 1.88499C5.441 2.35799 3.61 4.18999 3.136 6.45499C2.541 9.30099 3.976 11.873 6.25 13.055V16.5"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 16.25V13.75H12.889C13.938 13.75 14.808 12.94 14.884 11.894L14.996 10.351L16.5 9.74999L15 7.74999C15 4.01399 11.585 1.07499 7.707 1.88499C5.441 2.35799 3.61 4.18999 3.136 6.45499C2.541 9.30099 3.976 11.873 6.25 13.055V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 8C12.6642 8 13 7.66421 13 7.25C13 6.83579 12.6642 6.5 12.25 6.5C11.8358 6.5 11.5 6.83579 11.5 7.25C11.5 7.66421 11.8358 8 12.25 8Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default SideProfile;
