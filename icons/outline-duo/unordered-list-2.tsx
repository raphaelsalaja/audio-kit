import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UnorderedList2({
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
          d="M3.75 10.5C4.57843 10.5 5.25 9.82843 5.25 9C5.25 8.17157 4.57843 7.5 3.75 7.5C2.92157 7.5 2.25 8.17157 2.25 9C2.25 9.82843 2.92157 10.5 3.75 10.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 5.25C4.57843 5.25 5.25 4.57843 5.25 3.75C5.25 2.92157 4.57843 2.25 3.75 2.25C2.92157 2.25 2.25 2.92157 2.25 3.75C2.25 4.57843 2.92157 5.25 3.75 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 15.75C4.57843 15.75 5.25 15.0784 5.25 14.25C5.25 13.4216 4.57843 12.75 3.75 12.75C2.92157 12.75 2.25 13.4216 2.25 14.25C2.25 15.0784 2.92157 15.75 3.75 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 10.5C4.57843 10.5 5.25 9.82843 5.25 9C5.25 8.17157 4.57843 7.5 3.75 7.5C2.92157 7.5 2.25 8.17157 2.25 9C2.25 9.82843 2.92157 10.5 3.75 10.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25 9H15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 5.25C4.57843 5.25 5.25 4.57843 5.25 3.75C5.25 2.92157 4.57843 2.25 3.75 2.25C2.92157 2.25 2.25 2.92157 2.25 3.75C2.25 4.57843 2.92157 5.25 3.75 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25 3.75H15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 15.75C4.57843 15.75 5.25 15.0784 5.25 14.25C5.25 13.4216 4.57843 12.75 3.75 12.75C2.92157 12.75 2.25 13.4216 2.25 14.25C2.25 15.0784 2.92157 15.75 3.75 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25 14.25H15.75"
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

export default UnorderedList2;
