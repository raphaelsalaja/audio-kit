import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SearchChart({
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
          d="M6.3438 6.2812L9.1563 9.1718L12.8022 5.5822L12.802 5.57339C11.9587 3.61829 10.0144 2.24989 7.75 2.24989C4.7125 2.24989 2.25 4.71229 2.25 7.74989C2.25 8.52329 2.4112 9.25839 2.6993 9.92619L6.3438 6.2812Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M12.802 5.5735L9.43098 8.9435C9.29698 9.0775 9.07799 9.0775 8.94299 8.9435L6.55698 6.5575C6.42298 6.4235 6.20398 6.4235 6.06898 6.5575L2.69818 9.9263"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
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
          d="M12.802 5.5735C11.9587 3.6185 10.0144 2.25 7.75 2.25C4.7125 2.25 2.25 4.7125 2.25 7.75C2.25 10.7875 4.7125 13.25 7.75 13.25C10.0867 13.25 12.0831 11.7927 12.8799 9.7375"
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

export default SearchChart;
