import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersShakingHands({
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
          d="M3.75 5.25C4.7165 5.25 5.5 4.4665 5.5 3.5C5.5 2.5335 4.7165 1.75 3.75 1.75C2.7835 1.75 2 2.5335 2 3.5C2 4.4665 2.7835 5.25 3.75 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 5.25C15.2165 5.25 16 4.4665 16 3.5C16 2.5335 15.2165 1.75 14.25 1.75C13.2835 1.75 12.5 2.5335 12.5 3.5C12.5 4.4665 13.2835 5.25 14.25 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.75 5.25C4.7165 5.25 5.5 4.4665 5.5 3.5C5.5 2.5335 4.7165 1.75 3.75 1.75C2.7835 1.75 2 2.5335 2 3.5C2 4.4665 2.7835 5.25 3.75 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 12.75V14.25C5.75 14.802 5.302 15.25 4.75 15.25H2.75C2.198 15.25 1.75 14.802 1.75 14.25V9.75C1.75 8.645 2.645 7.75 3.75 7.75C4.855 7.75 5.391 8.41 5.859 9.484C6.282 10.453 7.146 10.89 7.82 11.088"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 12.75V14.25C12.25 14.802 12.698 15.25 13.25 15.25H15.25C15.802 15.25 16.25 14.802 16.25 14.25V9.75C16.25 8.645 15.355 7.75 14.25 7.75C13.145 7.75 12.609 8.41 12.141 9.484C11.718 10.453 10.854 10.89 10.18 11.088"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 5.25C15.2165 5.25 16 4.4665 16 3.5C16 2.5335 15.2165 1.75 14.25 1.75C13.2835 1.75 12.5 2.5335 12.5 3.5C12.5 4.4665 13.2835 5.25 14.25 5.25Z"
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

export default UsersShakingHands;
