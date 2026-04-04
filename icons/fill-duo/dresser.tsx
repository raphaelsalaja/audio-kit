import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dresser({
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
          d="M2 9H16V12.25C16 13.767 14.767 15 13.25 15H4.75C3.233 15 2 13.767 2 12.25L2 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M16 7.5V4.25C16 2.733 14.767 1.5 13.25 1.5H4.75C3.233 1.5 2 2.733 2 4.25L2 7.5H16Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.5 11.25C6.5 10.8358 6.83579 10.5 7.25 10.5H10.75C11.1642 10.5 11.5 10.8358 11.5 11.25C11.5 11.6642 11.1642 12 10.75 12H7.25C6.83579 12 6.5 11.6642 6.5 11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.5 5.25C6.5 4.83579 6.83579 4.5 7.25 4.5H10.75C11.1642 4.5 11.5 4.83579 11.5 5.25C11.5 5.66421 11.1642 6 10.75 6H7.25C6.83579 6 6.5 5.66421 6.5 5.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.5 15V16.25C12.5 16.6642 12.8358 17 13.25 17C13.6642 17 14 16.6642 14 16.25V14.8962C13.7615 14.9638 13.5099 15 13.25 15H12.5Z"
          fill={fill}
        />
        <path
          d="M4 14.8962V16.25C4 16.6642 4.33579 17 4.75 17C5.16421 17 5.5 16.6642 5.5 16.25V15H4.75C4.49007 15 4.23848 14.9638 4 14.8962Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Dresser;
