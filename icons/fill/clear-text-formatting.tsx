import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClearTextFormatting({
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
          d="M14.25 2H3.75C3.336 2 3 2.336 3 2.75C3 3.164 3.336 3.5 3.75 3.5H8.25V9C8.25 9.414 8.586 9.75 9 9.75C9.414 9.75 9.75 9.414 9.75 9V3.5H14.25C14.664 3.5 15 3.164 15 2.75C15 2.336 14.664 2 14.25 2Z"
          fill={fill}
        />
        <path
          d="M1.99999 16.75C1.80799 16.75 1.61599 16.677 1.46999 16.53C1.17699 16.237 1.17699 15.762 1.46999 15.469L15.47 1.46999C15.763 1.17699 16.238 1.17699 16.531 1.46999C16.824 1.76299 16.824 2.23799 16.531 2.53099L2.52999 16.53C2.38399 16.676 2.19199 16.75 1.99999 16.75Z"
          fill={secondaryfill}
        />
        <path
          d="M9 12.4922C9.41421 12.4922 9.75 12.828 9.75 13.2422V15.25C9.75 15.6642 9.41421 16 9 16C8.58579 16 8.25 15.6642 8.25 15.25V13.2422C8.25 12.828 8.58579 12.4922 9 12.4922Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ClearTextFormatting;
