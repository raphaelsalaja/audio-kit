import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AnimationFrames({
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
          d="M14.25 15.25H3.75C2.6454 15.25 1.75 14.355 1.75 13.25V12.25H6.25C6.8023 12.25 7.25 11.802 7.25 11.25V6.75C7.25 6.198 6.8023 5.75 6.25 5.75H1.75V4.75C1.75 3.645 2.6454 2.75 3.75 2.75H14.25C15.3546 2.75 16.25 3.645 16.25 4.75V5.75H11.75C11.1977 5.75 10.75 6.198 10.75 6.75V11.25C10.75 11.802 11.1977 12.25 11.75 12.25H16.25V13.25C16.25 14.355 15.3546 15.25 14.25 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 12.25H6.25C6.8023 12.25 7.25 11.802 7.25 11.25V6.75C7.25 6.198 6.8023 5.75 6.25 5.75H1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 5.75H11.75C11.1977 5.75 10.75 6.198 10.75 6.75V11.25C10.75 11.802 11.1977 12.25 11.75 12.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 15.25H14.25C15.3546 15.25 16.25 14.355 16.25 13.25V4.75C16.25 3.645 15.3546 2.75 14.25 2.75H3.75C2.6454 2.75 1.75 3.645 1.75 4.75V13.25C1.75 14.355 2.6454 15.25 3.75 15.25Z"
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

export default AnimationFrames;
