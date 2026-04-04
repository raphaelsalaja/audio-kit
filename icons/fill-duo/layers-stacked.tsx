import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayersStacked({
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
          d="M5.74999 6.25C5.54268 6.25 5.34462 6.33581 5.20283 6.48704L1.45283 10.487C1.24837 10.7051 1.19295 11.0238 1.31179 11.2981C1.43064 11.5725 1.70104 11.75 1.99999 11.75H12.25C12.4573 11.75 12.6554 11.6642 12.7971 11.513L16.5471 7.51296C16.7516 7.29486 16.807 6.97617 16.6882 6.70185C16.5693 6.42754 16.2989 6.25 16 6.25H5.74999Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.25319 11.75H12.25C12.4573 11.75 12.6554 11.6642 12.7971 11.513L13.7468 10.5H16C16.2989 10.5 16.5693 10.6775 16.6882 10.9519C16.807 11.2262 16.7516 11.5449 16.5471 11.763L12.7971 15.763C12.6554 15.9142 12.4573 16 12.25 16H1.99999C1.70104 16 1.43064 15.8225 1.31179 15.5481C1.19295 15.2738 1.24837 14.9551 1.45283 14.737L4.25319 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M5.74999 2C5.54268 2 5.34462 2.08581 5.20283 2.23704L1.45283 6.23704C1.24837 6.45514 1.19295 6.77383 1.31179 7.04815C1.43064 7.32246 1.70104 7.5 1.99999 7.5H12.25C12.4573 7.5 12.6554 7.41419 12.7971 7.26296L16.5471 3.26296C16.7516 3.04486 16.807 2.72617 16.6882 2.45185C16.5693 2.17754 16.2989 2 16 2H5.74999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LayersStacked;
