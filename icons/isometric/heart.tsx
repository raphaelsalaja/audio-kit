import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M7.78463 1.91187L5.44686 3.34204L5.00684 3.56208L8.41717 5.07473L10.8099 8.12753L12.7615 7.38666L14.3317 7.94228L16.778 9.8877L18.5932 13.5181V16.9284L20.1054 16.2525L21.3434 14.7557L21.1234 11.5104L19.0607 7.57748L15.5404 5.67979L13.2851 6.31235L11.36 3.56208L7.78463 1.91187Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M3.94828 4.09247C2.22588 5.12409 2.22588 8.21957 3.94828 11.0064L10.1486 21.2202C10.4383 21.6974 11.0627 21.845 11.5354 21.548L17.4028 17.8618C19.1252 16.8302 19.1252 13.7347 17.4028 10.9479C15.6804 8.16105 12.8878 6.73817 11.1654 7.76979C10.9828 7.8792 10.8195 8.01183 10.6755 8.16484C10.5316 7.86516 10.3683 7.56613 10.1856 7.27057C8.46324 4.48373 5.67068 3.06085 3.94828 4.09247Z"
          stroke={fill}
          strokeLinejoin="round"
        />
        <path
          d="M14.2054 19.8719L20.0502 16.2168C21.7726 15.1852 21.7726 12.0897 20.0502 9.3029C18.3278 6.51606 15.5352 5.09318 13.8128 6.1248C13.6302 6.23421 13.4669 6.36683 13.3229 6.51984C13.179 6.22017 13.0157 5.92114 12.833 5.62557C11.1106 2.83874 8.31808 1.41585 6.59568 2.44748L5.73298 2.98437L4.00757 4.05741"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Heart;
