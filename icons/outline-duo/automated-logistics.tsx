import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AutomatedLogistics({
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
          d="M10.75 10.75H7.25C6.69772 10.75 6.25 11.1977 6.25 11.75V15.25C6.25 15.8023 6.69772 16.25 7.25 16.25H10.75C11.3023 16.25 11.75 15.8023 11.75 15.25V11.75C11.75 11.1977 11.3023 10.75 10.75 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 10.75H7.25C6.69772 10.75 6.25 11.1977 6.25 11.75V15.25C6.25 15.8023 6.69772 16.25 7.25 16.25H10.75C11.3023 16.25 11.75 15.8023 11.75 15.25V11.75C11.75 11.1977 11.3023 10.75 10.75 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 10.75H2.75C3.302 10.75 3.75 11.198 3.75 11.75V15.25C3.75 15.802 3.302 16.25 2.75 16.25H1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 10.75H15.25C14.698 10.75 14.25 11.198 14.25 11.75V15.25C14.25 15.802 14.698 16.25 15.25 16.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10.75V13"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 8.25001L11.894 5.88801C11.959 5.50001 11.79 5.11001 11.462 4.89201L8.99998 3.25101L6.53798 4.89201C6.21098 5.11001 6.04198 5.50001 6.10598 5.88801L6.49998 8.25001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 0.75V3.25"
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

export default AutomatedLogistics;
