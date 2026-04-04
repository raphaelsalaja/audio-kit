import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AutomatedLogistics2({
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
          d="M10.75 2.75H7.25C6.69772 2.75 6.25 3.19772 6.25 3.75V7.25C6.25 7.80228 6.69772 8.25 7.25 8.25H10.75C11.3023 8.25 11.75 7.80228 11.75 7.25V3.75C11.75 3.19772 11.3023 2.75 10.75 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 11.25H3.75C2.64543 11.25 1.75 12.1454 1.75 13.25C1.75 14.3546 2.64543 15.25 3.75 15.25H14.25C15.3546 15.25 16.25 14.3546 16.25 13.25C16.25 12.1454 15.3546 11.25 14.25 11.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 2.75H7.25C6.69772 2.75 6.25 3.19772 6.25 3.75V7.25C6.25 7.80228 6.69772 8.25 7.25 8.25H10.75C11.3023 8.25 11.75 7.80228 11.75 7.25V3.75C11.75 3.19772 11.3023 2.75 10.75 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 2.75H2.75C3.302 2.75 3.75 3.198 3.75 3.75V7.25C3.75 7.802 3.302 8.25 2.75 8.25H1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 2.75H15.25C14.698 2.75 14.25 3.198 14.25 3.75V7.25C14.25 7.802 14.698 8.25 15.25 8.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 2.75V5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 11.25H3.75C2.64543 11.25 1.75 12.1454 1.75 13.25C1.75 14.3546 2.64543 15.25 3.75 15.25H14.25C15.3546 15.25 16.25 14.3546 16.25 13.25C16.25 12.1454 15.3546 11.25 14.25 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 14C9.41421 14 9.75 13.6642 9.75 13.25C9.75 12.8358 9.41421 12.5 9 12.5C8.58579 12.5 8.25 12.8358 8.25 13.25C8.25 13.6642 8.58579 14 9 14Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.75 14C6.16421 14 6.5 13.6642 6.5 13.25C6.5 12.8358 6.16421 12.5 5.75 12.5C5.33579 12.5 5 12.8358 5 13.25C5 13.6642 5.33579 14 5.75 14Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.25 14C12.6642 14 13 13.6642 13 13.25C13 12.8358 12.6642 12.5 12.25 12.5C11.8358 12.5 11.5 12.8358 11.5 13.25C11.5 13.6642 11.8358 14 12.25 14Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default AutomatedLogistics2;
