import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoneyBill2({
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
          d="M16.5969 3.58504C15.3097 2.9135 14.0486 2.56931 12.7299 2.57337C11.4169 2.57741 10.0969 2.92656 8.68925 3.5674C7.4313 4.14009 6.32774 4.37706 5.27945 4.36071C4.22894 4.34432 3.18834 4.07282 2.05678 3.5656C1.82472 3.46158 1.55576 3.48224 1.34231 3.62047C1.12886 3.75871 1 3.99569 1 4.24999V13.75C1 14.0455 1.17355 14.3135 1.44322 14.4344C2.70766 15.0012 3.95106 15.3402 5.25605 15.3605C6.56326 15.3809 7.8867 15.0809 9.31075 14.4326C10.5851 13.8524 11.6921 13.5766 12.7346 13.5734C13.7714 13.5702 14.7943 13.8365 15.9031 14.4149C16.1356 14.5362 16.4145 14.5273 16.6388 14.3914C16.863 14.2554 17 14.0122 17 13.75V4.24999C17 3.97056 16.8447 3.71429 16.5969 3.58504Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 11.25C10.2431 11.25 11.25 10.2431 11.25 9C11.25 7.75688 10.2431 6.75 9 6.75C7.75688 6.75 6.75 7.75688 6.75 9C6.75 10.2431 7.75688 11.25 9 11.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MoneyBill2;
