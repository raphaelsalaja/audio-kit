import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flag5({
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
          d="M3.59228 2.51576C4.43188 2.33516 5.7405 2.16016 7.26516 2.4502C7.87852 2.56697 8.46278 2.76476 9.04171 2.99453C9.49253 3.17348 9.8414 3.31027 10.3298 3.38322C11.0673 3.49364 12.2498 3.47353 13.895 2.58935C14.1274 2.46444 14.4084 2.47086 14.6348 2.60626C14.8613 2.74166 15 2.98612 15 3.24999V10.239C15 10.5358 14.825 10.8047 14.5536 10.9248C12.5466 11.8132 10.9917 11.8275 9.91259 11.6489C9.29732 11.5471 8.84012 11.3817 8.42031 11.2369C8.00586 11.094 7.59877 10.9599 7.0071 10.8657C5.7291 10.6621 4.63663 10.8121 3.91091 10.9715C3.68903 11.0203 3.45702 10.9658 3.27999 10.8235C3.10296 10.6811 3 10.4662 3 10.239V3.24899C3 2.89556 3.24675 2.59009 3.59228 2.51576Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.75 1C4.16421 1 4.5 1.33579 4.5 1.75V16.25C4.5 16.6642 4.16421 17 3.75 17C3.33579 17 3 16.6642 3 16.25V1.75C3 1.33579 3.33579 1 3.75 1Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Flag5;
