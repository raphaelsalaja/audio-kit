import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cubes2({
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
          d="M12.75 10.637V13.863C12.75 14.252 12.525 14.605 12.173 14.769L9.423 16.052C9.155 16.177 8.845 16.177 8.577 16.052L5.827 14.769C5.475 14.605 5.25 14.251 5.25 13.863V10.637C5.25 10.248 5.475 9.895 5.827 9.731L8.577 8.448C8.845 8.323 9.155 8.323 9.423 8.448L12.173 9.731C12.525 9.895 12.75 10.249 12.75 10.637Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25 9.896V5.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.83 3.82999L5.25 5.49999L1.67 3.82899"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 4.387V7.613C9 8.002 8.775 8.355 8.423 8.519L5.673 9.802C5.405 9.927 5.095 9.927 4.827 9.802L2.077 8.519C1.725 8.355 1.5 8.001 1.5 7.613V4.387C1.5 3.998 1.725 3.645 2.077 3.481L4.827 2.198C5.095 2.073 5.405 2.073 5.673 2.198L8.423 3.481C8.775 3.645 9 3.999 9 4.387Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 9.896V5.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.17 3.82999L12.75 5.49999L16.33 3.82899"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 4.387V7.613C9 8.002 9.225 8.355 9.577 8.519L12.327 9.802C12.595 9.927 12.905 9.927 13.173 9.802L15.923 8.519C16.275 8.355 16.5 8.001 16.5 7.613V4.387C16.5 3.998 16.275 3.645 15.923 3.481L13.173 2.198C12.905 2.073 12.595 2.073 12.327 2.198L9.577 3.481C9.225 3.645 9 3.999 9 4.387Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.146V11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.58 10.08L9 11.75L5.42 10.079"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 10.637V13.863C12.75 14.252 12.525 14.605 12.173 14.769L9.423 16.052C9.155 16.177 8.845 16.177 8.577 16.052L5.827 14.769C5.475 14.605 5.25 14.251 5.25 13.863V10.637C5.25 10.248 5.475 9.895 5.827 9.731L8.577 8.448C8.845 8.323 9.155 8.323 9.423 8.448L12.173 9.731C12.525 9.895 12.75 10.249 12.75 10.637Z"
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

export default Cubes2;
