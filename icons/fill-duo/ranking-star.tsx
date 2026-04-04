import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RankingStar({
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
          d="M6 8.75C6 7.78379 6.78379 7 7.75 7H10.25C11.2162 7 12 7.78379 12 8.75V15.25C12 15.6642 11.6642 16 11.25 16H6.75C6.33579 16 6 15.6642 6 15.25V8.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.776 1.994C11.717 1.813 11.561 1.681 11.373 1.654L10.044 1.461L9.44901 0.257004C9.28101 -0.0849966 8.72001 -0.0849966 8.55301 0.257004L7.95801 1.461L6.62801 1.654C6.44001 1.681 6.28301 1.813 6.22501 1.994C6.16601 2.175 6.21501 2.373 6.35201 2.506L7.31401 3.444L7.08601 4.768C7.05401 4.956 7.13101 5.145 7.28501 5.257C7.37201 5.32 7.47501 5.353 7.57901 5.353C7.65901 5.353 7.73801 5.334 7.81101 5.295L9.00001 4.67L10.188 5.295C10.356 5.384 10.56 5.369 10.714 5.257C10.868 5.145 10.945 4.955 10.913 4.768L10.685 3.444L11.647 2.506C11.784 2.373 11.833 2.174 11.774 1.994H11.776Z"
          fill={fill}
        />
        <path
          d="M6 11H3.25C2.28379 11 1.5 11.7838 1.5 12.75V14.25C1.5 15.2162 2.28379 16 3.25 16H6.75C6.33579 16 6 15.6642 6 15.25V11Z"
          fill={fill}
        />
        <path
          d="M11.25 16H14.75C15.7162 16 16.5 15.2162 16.5 14.25V11.25C16.5 10.2838 15.7162 9.5 14.75 9.5H12V15.25C12 15.6642 11.6642 16 11.25 16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default RankingStar;
