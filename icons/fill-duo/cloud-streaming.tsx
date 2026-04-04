import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudStreaming({
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
          d="M4.24349 4.50001C4.87926 2.47591 6.75866 1 9 1C11.2413 1 13.1207 2.47591 13.7565 4.50001C15.5487 4.50352 17 5.95695 17 7.75C17 9.54521 15.5452 11 13.75 11H4.25C2.45479 11 1 9.54521 1 7.75C1 5.95696 2.45127 4.50352 4.24349 4.50001Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11 14.25C11 13.8358 11.3358 13.5 11.75 13.5H16.25C16.6642 13.5 17 13.8358 17 14.25C17 14.6642 16.6642 15 16.25 15H11.75C11.3358 15 11 14.6642 11 14.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.5 12.5C9.5 12.0858 9.16421 11.75 8.75 11.75C8.33579 11.75 8 12.0858 8 12.5V13.5H1.75C1.33579 13.5 1 13.8358 1 14.25C1 14.6642 1.33579 15 1.75 15H8V16C8 16.4142 8.33579 16.75 8.75 16.75C9.16421 16.75 9.5 16.4142 9.5 16V12.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.3912 5.90677L8.41255 4.16855C7.89244 3.86483 7.23035 4.22879 7.23035 4.81865V8.29636C7.23035 8.88623 7.89244 9.25019 8.41255 8.94647L11.3912 7.20824C11.8959 6.9133 11.8959 6.2017 11.3912 5.90677Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CloudStreaming;
