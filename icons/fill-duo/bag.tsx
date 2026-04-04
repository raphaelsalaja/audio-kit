import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bag({
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
          d="M1.52501 6.61196C1.59682 5.70164 2.35649 5 3.26959 5H14.7304C15.5944 5 16.3207 5.62782 16.4576 6.46702C16.4764 6.58234 16.4833 6.71597 16.4863 6.75414L16.9821 13.0329C17.1085 14.6323 15.8445 15.999 14.2404 15.999H3.75968C2.15554 15.999 0.89154 14.6324 1.01801 13.033M1.01801 13.033L1.52501 6.61196L1.01801 13.033Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.25 11H7.75C7.336 11 7 11.3358 7 11.75V12.25C7 12.6642 7.336 13 7.75 13H10.25C10.664 13 11 12.6642 11 12.25V11.75C11 11.3358 10.664 11 10.25 11Z"
          fill={fill}
        />
        <path
          d="M9 2.5C7.89521 2.5 7 3.39521 7 4.5V7.75C7 8.16421 6.66421 8.5 6.25 8.5C5.83579 8.5 5.5 8.16421 5.5 7.75V4.5C5.5 2.56679 7.06679 1 9 1C10.9332 1 12.5 2.56679 12.5 4.5V7.75C12.5 8.16421 12.1642 8.5 11.75 8.5C11.3358 8.5 11 8.16421 11 7.75V4.5C11 3.39521 10.1048 2.5 9 2.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Bag;
