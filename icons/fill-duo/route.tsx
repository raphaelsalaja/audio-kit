import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Route({
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
          d="M1 11C1 9.06679 2.56679 7.5 4.5 7.5H6.75C7.16421 7.5 7.38234 7.83579 7.38234 8.25C7.38234 8.66421 7.16421 9 6.75 9H4.5C3.39521 9 2.5 9.89521 2.5 11C2.5 12.1048 3.39521 13 4.5 13H15.5202C15.9344 13 16.2702 13.3358 16.2702 13.75C16.2702 14.1642 15.9344 14.5 15.5202 14.5H4.5C2.56679 14.5 1 12.9332 1 11Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.5 2.75C5.5 2.33579 5.83579 2 6.25 2H13.5C15.4332 2 17 3.56679 17 5.5C17 7.43321 15.4332 9 13.5 9H11.25C10.8358 9 10.6435 8.66421 10.6435 8.25C10.6435 7.83579 10.8358 7.5 11.25 7.5H13.5C14.6048 7.5 15.5 6.60479 15.5 5.5C15.5 4.39521 14.6048 3.5 13.5 3.5H6.25C5.83579 3.5 5.5 3.16421 5.5 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.25 3.5C3.664 3.5 4 3.164 4 2.75C4 2.336 3.664 2 3.25 2C2.836 2 2.5 2.336 2.5 2.75C2.5 3.164 2.836 3.5 3.25 3.5Z"
          fill={fill}
        />
        <path
          d="M12.7447 10.7447C13.0376 10.4518 13.5125 10.4518 13.8054 10.7447L16.2804 13.2197C16.5732 13.5126 16.5732 13.9874 16.2804 14.2803L13.8054 16.7553C13.5125 17.0482 13.0376 17.0482 12.7447 16.7553C12.4518 16.4624 12.4518 15.9876 12.7447 15.6947L14.6894 13.75L12.7447 11.8053C12.4518 11.5124 12.4518 11.0376 12.7447 10.7447Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.5 8.25C6.5 6.86899 7.61899 5.75 9 5.75C10.381 5.75 11.5 6.86899 11.5 8.25C11.5 9.63101 10.381 10.75 9 10.75C7.61899 10.75 6.5 9.63101 6.5 8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Route;
