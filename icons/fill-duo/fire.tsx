import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Fire({
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
          d="M13.18 5.30199C13.002 5.15199 12.763 5.094 12.538 5.143C12.31 5.191 12.118 5.344 12.017 5.553C12.013 5.562 11.734 6.135 11.199 6.685C10.667 2.275 7.73899 0.660996 7.60299 0.587996C7.37499 0.465996 7.10099 0.470994 6.87699 0.598994C6.65299 0.726994 6.51099 0.960997 6.50099 1.219C6.38999 3.949 5.51299 5.163 4.58499 6.448C3.79199 7.546 2.97299 8.681 2.75499 10.65C2.57599 12.263 3.05699 13.793 4.10899 14.959C5.28199 16.258 7.04399 17 8.94999 17H9.00699C11.695 16.979 13.877 15.939 14.992 14.146C16.691 11.415 15.912 7.61299 13.18 5.30199Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.247 14.42C10.79 15.092 9.995 15.496 9.121 15.5H9.1C7.774 15.5 6.749 14.876 6.287 13.786C5.655 12.297 6.185 10.202 7.549 8.80401C7.754 8.59401 8.064 8.523 8.339 8.621C8.615 8.72 8.809 8.97101 8.833 9.26301C8.931 10.408 9.264 10.556 9.867 10.825C10.381 11.054 11.083 11.367 11.453 12.314C11.737 13.041 11.663 13.809 11.247 14.42Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Fire;
