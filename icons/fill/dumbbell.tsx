import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dumbbell({
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
          d="M14 9C14 8.58579 14.3358 8.25 14.75 8.25H16.5C16.9142 8.25 17.25 8.58579 17.25 9C17.25 9.41421 16.9142 9.75 16.5 9.75H14.75C14.3358 9.75 14 9.41421 14 9Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M5.5 9C5.5 8.58579 5.83579 8.25 6.25 8.25H11.75C12.1642 8.25 12.5 8.58579 12.5 9C12.5 9.41421 12.1642 9.75 11.75 9.75H6.25C5.83579 9.75 5.5 9.41421 5.5 9Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M0.75 9C0.75 8.58579 1.08579 8.25 1.5 8.25H3.25C3.66421 8.25 4 8.58579 4 9C4 9.41421 3.66421 9.75 3.25 9.75H1.5C1.08579 9.75 0.75 9.41421 0.75 9Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M11.4963 4.25C11.4963 3.2835 12.2798 2.5 13.2463 2.5C14.2128 2.5 14.9963 3.2835 14.9963 4.25V13.75C14.9963 14.7165 14.2128 15.5 13.2463 15.5C12.2798 15.5 11.4963 14.7165 11.4963 13.75V4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3 4.25C3 3.2835 3.7835 2.5 4.75 2.5C5.7165 2.5 6.5 3.2835 6.5 4.25V13.75C6.5 14.7165 5.7165 15.5 4.75 15.5C3.7835 15.5 3 14.7165 3 13.75V4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Dumbbell;
