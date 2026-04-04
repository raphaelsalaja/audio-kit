import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartActivity3({
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
          d="M4 4.875C4 3.28679 5.28679 2 6.875 2C8.46321 2 9.75 3.28679 9.75 4.875V13.125C9.75 13.8848 10.3652 14.5 11.125 14.5C11.8848 14.5 12.5 13.8848 12.5 13.125V10.75C12.5 9.23079 13.7308 8 15.25 8H15.75C16.1642 8 16.5 8.33579 16.5 8.75C16.5 9.16421 16.1642 9.5 15.75 9.5H15.25C14.5592 9.5 14 10.0592 14 10.75V13.125C14 14.7132 12.7132 16 11.125 16C9.53679 16 8.25 14.7132 8.25 13.125V4.875C8.25 4.11521 7.63479 3.5 6.875 3.5C6.11521 3.5 5.5 4.11521 5.5 4.875V7.25C5.5 8.76921 4.26921 10 2.75 10H2.25C1.83579 10 1.5 9.66421 1.5 9.25C1.5 8.83579 1.83579 8.5 2.25 8.5H2.75C3.44079 8.5 4 7.94079 4 7.25V4.875Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ChartActivity3;
