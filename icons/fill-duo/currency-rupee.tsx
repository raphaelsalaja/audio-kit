import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CurrencyRupee({
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
          d="M4.5 5.75C4.5 5.33579 4.83579 5 5.25 5H12.75C13.1642 5 13.5 5.33579 13.5 5.75C13.5 6.16421 13.1642 6.5 12.75 6.5H5.25C4.83579 6.5 4.5 6.16421 4.5 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.25 2C4.83579 2 4.5 2.33579 4.5 2.75C4.5 3.16421 4.83579 3.5 5.25 3.5H7.00001C8.3808 3.5 9.50001 4.61921 9.50001 6C9.50001 7.38079 8.3808 8.5 7.00001 8.5H5.25001C4.959 8.5 4.69425 8.66834 4.57082 8.93188C4.44738 9.19542 4.48754 9.50658 4.67384 9.73014L9.67384 15.7301C9.93902 16.0483 10.4119 16.0913 10.7301 15.8262C11.0484 15.561 11.0913 15.0881 10.8262 14.7699L6.85129 10H7.00001C9.20922 10 11 8.20921 11 6C11 5.05404 10.6717 4.18479 10.1227 3.5H12.75C13.1642 3.5 13.5 3.16421 13.5 2.75C13.5 2.33579 13.1642 2 12.75 2H7.00001H5.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CurrencyRupee;
