import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DesktopArrowUp({
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
          d="M1 4.75C1 3.23079 2.23079 2 3.75 2H14.25C15.7692 2 17 3.23079 17 4.75V10.75C17 12.2692 15.7692 13.5 14.25 13.5H3.75C2.23079 13.5 1 12.2692 1 10.75V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.53033 4.21967C9.23744 3.92678 8.76256 3.92678 8.46967 4.21967L5.71967 6.96967C5.42678 7.26256 5.42678 7.73744 5.71967 8.03033C6.01256 8.32322 6.48744 8.32322 6.78033 8.03033L8.25 6.56066V10.75C8.25 11.1642 8.58579 11.5 9 11.5C9.41421 11.5 9.75 11.1642 9.75 10.75V6.56066L11.2197 8.03033C11.5126 8.32322 11.9874 8.32322 12.2803 8.03033C12.5732 7.73744 12.5732 7.26256 12.2803 6.96967L9.53033 4.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.25002 13.5V14.5244C7.12271 14.5976 6.19234 14.8241 5.52449 15.0347C5.12944 15.1593 4.91017 15.5805 5.03473 15.9755C5.15929 16.3706 5.58051 16.5898 5.97555 16.4653C6.6808 16.2429 7.72318 16 9.00002 16C9.73961 16 10.8063 16.0819 12.0248 16.4654C12.42 16.5898 12.8411 16.3703 12.9654 15.9752C13.0898 15.5801 12.8703 15.159 12.4752 15.0346C11.446 14.7107 10.511 14.574 9.75002 14.5244V13.5H8.25002Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DesktopArrowUp;
