import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeadSideVrHeadset({
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
          d="M10.75 4.25H14.25C14.802 4.25 15.25 4.698 15.25 5.25V7.25C15.25 7.802 14.802 8.25 14.25 8.25H10.75C9.646 8.25 8.75 7.354 8.75 6.25C8.75 5.146 9.646 4.25 10.75 4.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.874 4.249C11.556 2.417 9.23 1.358 6.707 1.885C4.441 2.358 2.61 4.19 2.136 6.455C1.541 9.301 2.976 11.873 5.25 13.055V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 16.25V13.75H11.889C12.938 13.75 13.808 12.94 13.884 11.894L13.996 10.351L15.5 9.75L14.375 8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 4.25H14.25C14.802 4.25 15.25 4.698 15.25 5.25V7.25C15.25 7.802 14.802 8.25 14.25 8.25H10.75C9.646 8.25 8.75 7.354 8.75 6.25C8.75 5.146 9.646 4.25 10.75 4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 6.25H2.183"
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

export default HeadSideVrHeadset;
