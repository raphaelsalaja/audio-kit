import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveBookmark({
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
          d="M14.659 8.84099C15.0278 9.20979 15.5031 9.43046 16 9.48608V11.25C16 11.6642 15.6642 12 15.25 12H12.5V14.5H5.5V12H2.75C2.33579 12 2 11.6642 2 11.25V4.75C2 3.23203 3.23054 2 4.75 2H9.5V7.25C9.5 8.16004 10.0482 8.98047 10.889 9.32873C11.7297 9.67699 12.6975 9.48449 13.341 8.84099L14 8.18198L14.659 8.84099Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12 11H14H16V13.25C16 14.767 14.767 16 13.25 16H4.75C3.233 16 2 14.767 2 13.25V11H3.5H6C6.414 11 6.75 11.336 6.75 11.75V13.25C6.75 13.388 6.862 13.5 7 13.5H11C11.138 13.5 11.25 13.388 11.25 13.25V11.75C11.25 11.336 11.586 11 12 11Z"
          fill={fill}
        />
        <path
          d="M11 1.75C11 0.783486 11.7835 0 12.75 0H15.25C16.2165 0 17 0.783486 17 1.75V7.25C17 7.55335 16.8173 7.82682 16.537 7.94291C16.2568 8.059 15.9342 7.99483 15.7197 7.78033L14 6.06066L12.2803 7.78033C12.0658 7.99483 11.7432 8.059 11.463 7.94291C11.1827 7.82682 11 7.55335 11 7.25V1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ArchiveBookmark;
