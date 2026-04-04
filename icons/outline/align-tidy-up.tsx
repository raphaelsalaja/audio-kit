import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlignTidyUp({
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
          d="M8.5 14.25H9.5C10.052 14.25 10.5 13.8023 10.5 13.25V4.75C10.5 4.1977 10.052 3.75 9.5 3.75H8.5C7.948 3.75 7.5 4.1977 7.5 4.75V13.25C7.5 13.8023 7.948 14.25 8.5 14.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 14.25H3.25C3.802 14.25 4.25 13.8023 4.25 13.25V4.75C4.25 4.1977 3.802 3.75 3.25 3.75H2.25C1.698 3.75 1.25 4.1977 1.25 4.75V13.25C1.25 13.8023 1.698 14.25 2.25 14.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 14.25H15.75C16.302 14.25 16.75 13.8023 16.75 13.25V4.75C16.75 4.1977 16.302 3.75 15.75 3.75H14.75C14.198 3.75 13.75 4.1977 13.75 4.75V13.25C13.75 13.8023 14.198 14.25 14.75 14.25Z"
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

export default AlignTidyUp;
