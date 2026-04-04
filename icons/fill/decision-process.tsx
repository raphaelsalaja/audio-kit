import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DecisionProcess({
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
          d="M4.75 5C5.16421 5 5.5 5.33579 5.5 5.75V12.25C5.5 12.6642 5.16421 13 4.75 13C4.33579 13 4 12.6642 4 12.25V5.75C4 5.33579 4.33579 5 4.75 5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M7 4C7 3.58579 7.33579 3.25 7.75 3.25H12.25C13.2162 3.25 14 4.03379 14 5V6.5C14 6.91421 13.6642 7.25 13.25 7.25C12.8358 7.25 12.5 6.91421 12.5 6.5V5C12.5 4.86221 12.3878 4.75 12.25 4.75H7.75C7.33579 4.75 7 4.41421 7 4Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M13.25 10.75C13.6642 10.75 14 11.0858 14 11.5V13C14 13.9662 13.2162 14.75 12.25 14.75H7.75C7.33579 14.75 7 14.4142 7 14C7 13.5858 7.33579 13.25 7.75 13.25H12.25C12.3878 13.25 12.5 13.1378 12.5 13V11.5C12.5 11.0858 12.8358 10.75 13.25 10.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M1 3.25C1 2.28379 1.78379 1.5 2.75 1.5H6.75C7.71621 1.5 8.5 2.28379 8.5 3.25V4.75C8.5 5.71621 7.71621 6.5 6.75 6.5H2.75C1.78379 6.5 1 5.71621 1 4.75V3.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 13.25C1 12.2838 1.78379 11.5 2.75 11.5H6.75C7.71621 11.5 8.5 12.2838 8.5 13.25V14.75C8.5 15.7162 7.71621 16.5 6.75 16.5H2.75C1.78379 16.5 1 15.7162 1 14.75V13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.9434 6.06087C13.5236 5.78092 12.9765 5.78092 12.5567 6.06087L9.70809 7.95996C8.96615 8.45475 8.96576 9.54529 9.70809 10.0401L12.2242 11.7176C12.3305 11.7885 12.4303 11.8682 12.5399 11.9346C12.6914 12.0264 12.9414 12.1518 13.2604 12.1492C13.5154 12.1471 13.7184 12.064 13.8592 11.9878C13.9751 11.925 14.1099 11.8283 14.1373 11.81L16.792 10.0401C17.534 9.54535 17.5344 8.45481 16.792 7.95996L13.9434 6.06087Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default DecisionProcess;
