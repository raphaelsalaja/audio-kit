import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagnifierAlert({
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
          d="M8.39746 2.62598L6.57129 5.51074C5.20095 7.67465 6.75612 10.5 9.31738 10.5H9.75C9.77529 10.5 9.80092 10.4993 9.82617 10.498L9.90332 10.4941C9.92875 10.4928 9.95416 10.4909 9.97949 10.4883C10.2108 10.4647 10.4306 10.4035 10.6357 10.3154C10.9404 10.6295 11.3354 10.8538 11.7791 10.9478C11.8208 10.9567 11.8631 10.9644 11.9057 10.9709C12.0236 10.9889 12.0894 11.1268 12.0141 11.2194C11.0062 12.4579 9.47146 13.25 7.75 13.25C4.7125 13.25 2.25 10.7875 2.25 7.75C2.25 4.7125 4.7125 2.25 7.75 2.25C7.95853 2.37771 8.17581 2.50179 8.39746 2.62598Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.75 15.75L11.6386 11.6386"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 2.25C4.7125 2.25 2.25 4.7125 2.25 7.75C2.25 10.7875 4.7125 13.25 7.75 13.25C9.2685 13.25 10.6434 12.6346 11.6386 11.6395"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 8.24998H15.183C15.9711 8.24998 16.4495 7.38078 16.0278 6.71488L13.0948 2.08388C12.7022 1.46398 11.7978 1.46398 11.4052 2.08388L8.4722 6.71488C8.0505 7.38068 8.52891 8.24998 9.31701 8.24998H9.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 4.75V6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 9.5C12.6642 9.5 13 9.16421 13 8.75C13 8.33579 12.6642 8 12.25 8C11.8358 8 11.5 8.33579 11.5 8.75C11.5 9.16421 11.8358 9.5 12.25 9.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default MagnifierAlert;
