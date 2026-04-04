import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GraduationCap({
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
          d="M9.45801 2.361L15.79 5.621C16.403 5.937 16.403 6.813 15.79 7.129L9.45801 10.389C9.17001 10.537 8.829 10.537 8.542 10.389L2.20999 7.129C1.59699 6.813 1.59699 5.937 2.20999 5.621L8.542 2.361C8.83 2.213 9.17101 2.213 9.45801 2.361Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.45801 2.361L15.79 5.621C16.403 5.937 16.403 6.813 15.79 7.129L9.45801 10.389C9.17001 10.537 8.829 10.537 8.542 10.389L2.20999 7.129C1.59699 6.813 1.59699 5.937 2.20999 5.621L8.542 2.361C8.83 2.213 9.17101 2.213 9.45801 2.361Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 6.375C16.079 7.115 15.932 8.097 15.969 9.25C15.996 10.084 16.113 10.812 16.25 11.406"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 11.5535V14C4.25 15.104 6.377 16 9 16C11.623 16 13.75 15.104 13.75 14V11.5535"
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

export default GraduationCap;
