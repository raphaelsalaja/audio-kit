import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersSeparation({
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
          d="M9 2V16"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 6.75C4.966 6.75 5.75 5.966 5.75 5C5.75 4.034 4.966 3.25 4 3.25C3.034 3.25 2.25 4.034 2.25 5C2.25 5.966 3.034 6.75 4 6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 9.25C5.243 9.25 6.25 10.257 6.25 11.5V13.75C6.25 14.302 5.802 14.75 5.25 14.75H2.75C2.198 14.75 1.75 14.302 1.75 13.75V11.5C1.75 10.257 2.757 9.25 4 9.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 6.75C14.966 6.75 15.75 5.966 15.75 5C15.75 4.034 14.966 3.25 14 3.25C13.034 3.25 12.25 4.034 12.25 5C12.25 5.966 13.034 6.75 14 6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 9.25C12.757 9.25 11.75 10.257 11.75 11.5V13.75C11.75 14.302 12.198 14.75 12.75 14.75H15.25C15.802 14.75 16.25 14.302 16.25 13.75V11.5C16.25 10.257 15.243 9.25 14 9.25Z"
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

export default UsersSeparation;
