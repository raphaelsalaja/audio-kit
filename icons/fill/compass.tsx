import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Compass({
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
          d="M1 9.5C1 5.089 4.589 1.5 9 1.5C13.411 1.5 17 5.089 17 9.5C17 13.911 13.411 17.5 9 17.5C4.589 17.5 1 13.911 1 9.5ZM12.9828 6.49142C13.0936 6.21309 13.0282 5.89549 12.8163 5.68365C12.6045 5.47181 12.2869 5.40636 12.0086 5.51718L7.30955 7.38818C7.11809 7.46442 6.96643 7.61608 6.8902 7.80754L5.0192 12.5065C4.90837 12.7849 4.97382 13.1025 5.18566 13.3143C5.39751 13.5262 5.7151 13.5916 5.99344 13.4808L10.6924 11.6098C10.8839 11.5336 11.0356 11.3819 11.1118 11.1904L12.9828 6.49142Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Compass;
