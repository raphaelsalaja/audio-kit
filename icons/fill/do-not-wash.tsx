import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DoNotWash({
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
          d="M3.38301 14.617L11.964 6.036C11.805 6.072 11.656 6.142 11.549 6.269C11.424 6.419 11.285 6.557 11.137 6.681C10.456 7.252 9.59001 7.525 8.70801 7.446C7.82301 7.368 7.02101 6.95 6.45001 6.268C6.30701 6.098 6.09701 6 5.87501 6C5.65301 6 5.44101 6.099 5.29901 6.27C4.70901 6.978 3.85801 7.388 2.94501 7.438L2.49501 3.661C2.44601 3.25 2.07301 2.951 1.66201 3.005C1.25101 3.054 0.957007 3.427 1.00601 3.838L2.04601 12.574C2.15001 13.454 2.66401 14.194 3.38301 14.617Z"
          fill={fill}
        />
        <path
          d="M16.0341 5.55274C15.6281 5.49874 15.2491 5.79774 15.2011 6.20874L15.056 7.43999C14.684 7.41999 14.329 7.32599 13.992 7.19099L6.18201 15.001H13.224C14.617 15.001 15.79 13.959 15.954 12.576L16.6901 6.38674C16.7391 5.97474 16.4451 5.60074 16.0341 5.55274Z"
          fill={fill}
        />
        <path
          d="M1.99999 16.75C1.80799 16.75 1.61599 16.677 1.46999 16.53C1.17699 16.237 1.17699 15.762 1.46999 15.469L15.47 1.46999C15.763 1.17699 16.238 1.17699 16.531 1.46999C16.824 1.76299 16.824 2.23799 16.531 2.53099L2.52999 16.53C2.38399 16.676 2.19199 16.75 1.99999 16.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default DoNotWash;
