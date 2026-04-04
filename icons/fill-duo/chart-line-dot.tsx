import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartLineDot({
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
          d="M15.5 4.5C16.6046 4.5 17.5 3.60457 17.5 2.5C17.5 1.39543 16.6046 0.5 15.5 0.5C14.3954 0.5 13.5 1.39543 13.5 2.5C13.5 3.60457 14.3954 4.5 15.5 4.5Z"
          fill={fill}
        />
        <path
          d="M15.5 6C15.6698 6 15.8367 5.98791 16 5.96456V13.25C16 14.7692 14.7692 16 13.25 16H4.75C3.23079 16 2 14.7692 2 13.25V4.75C2 3.23079 3.23079 2 4.75 2H12.0354C12.0121 2.1633 12 2.33024 12 2.5C12 4.433 13.567 6 15.5 6Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.2803 7.21967C13.5732 7.51256 13.5732 7.98744 13.2803 8.28033L11.1343 10.4263C10.6464 10.9142 9.85456 10.9142 9.36667 10.4263L7.7505 8.81016L5.78134 10.7793C5.48845 11.0722 5.01357 11.0722 4.72068 10.7793C4.42778 10.4864 4.42778 10.0116 4.72068 9.71867L6.86667 7.57267C7.35456 7.08478 8.14643 7.08478 8.63433 7.57267L10.2505 9.18884L12.2197 7.21967C12.5126 6.92678 12.9874 6.92678 13.2803 7.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartLineDot;
