import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BadgeCheck2({
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
          d="M15.718 8.293L14.25 6.825V4.75C14.25 4.198 13.802 3.75 13.25 3.75H11.175L9.70699 2.282C9.31599 1.892 8.68299 1.892 8.29299 2.282L6.82499 3.75H4.74999C4.19799 3.75 3.74999 4.198 3.74999 4.75V6.825L2.28199 8.293C1.89099 8.683 1.89099 9.317 2.28199 9.707L3.74999 11.175V13.25C3.74999 13.802 4.19799 14.25 4.74999 14.25H6.82499L8.29299 15.718C8.68399 16.108 9.31699 16.108 9.70699 15.718L11.175 14.25H13.25C13.802 14.25 14.25 13.802 14.25 13.25V11.175L15.718 9.707C16.109 9.317 16.109 8.683 15.718 8.293Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.718 8.293L14.25 6.825V4.75C14.25 4.198 13.802 3.75 13.25 3.75H11.175L9.70699 2.282C9.31599 1.892 8.68299 1.892 8.29299 2.282L6.82499 3.75H4.74999C4.19799 3.75 3.74999 4.198 3.74999 4.75V6.825L2.28199 8.293C1.89099 8.683 1.89099 9.317 2.28199 9.707L3.74999 11.175V13.25C3.74999 13.802 4.19799 14.25 4.74999 14.25H6.82499L8.29299 15.718C8.68399 16.108 9.31699 16.108 9.70699 15.718L11.175 14.25H13.25C13.802 14.25 14.25 13.802 14.25 13.25V11.175L15.718 9.707C16.109 9.317 16.109 8.683 15.718 8.293Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.125 9.477L7.952 11.5L11.875 6.5"
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

export default BadgeCheck2;
