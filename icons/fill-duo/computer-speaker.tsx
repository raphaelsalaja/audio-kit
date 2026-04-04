import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ComputerSpeaker({
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
          d="M9.25 2C8.00792 2 7 3.00726 7 4.25V13.75C7 14.9927 8.00792 16 9.25 16H14.75C15.9921 16 17 14.9927 17 13.75V4.25C17 3.00726 15.9921 2 14.75 2H9.25ZM12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12 7C12.552 7 13 6.5523 13 6C13 5.4477 12.552 5 12 5C11.448 5 11 5.4477 11 6C11 6.5523 11.448 7 12 7Z"
          fill={fill}
        />
        <path
          d="M5.49574 13.1968C5.53982 13.6087 5.24168 13.9783 4.82982 14.0224C4.30704 14.0783 3.88924 14.23 3.60551 14.3653C3.46787 14.4309 3.3316 14.5043 3.20789 14.594C2.8819 14.8454 2.4136 14.787 2.15943 14.4623C1.9058 14.1383 1.9728 13.6527 2.29641 13.4027C2.34631 13.365 2.39682 13.3289 2.48438 13.2731C2.59723 13.2013 2.75706 13.1081 2.95976 13.0114C3.36446 12.8184 3.94666 12.6083 4.67018 12.5309C5.08204 12.4868 5.45166 12.7849 5.49574 13.1968Z"
          fill={fill}
        />
        <path
          d="M9.5 10.5C9.5 9.11915 10.6199 8 12 8C13.3801 8 14.5 9.11915 14.5 10.5C14.5 11.8809 13.3801 13 12 13C10.6199 13 9.5 11.8809 9.5 10.5ZM12 9.5C11.4481 9.5 11 9.94785 11 10.5C11 11.0521 11.4481 11.5 12 11.5C12.5519 11.5 13 11.0521 13 10.5C13 9.94785 12.5519 9.5 12 9.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 9.75C1 10.7162 1.78379 11.5 2.75 11.5H5.5V3.5H2.75C1.78379 3.5 1 4.28379 1 5.25V9.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ComputerSpeaker;
