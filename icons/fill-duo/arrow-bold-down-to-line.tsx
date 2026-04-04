import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldDownToLine({
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
          d="M14.25 15.5H3.75C3.336 15.5 3 15.836 3 16.25C3 16.664 3.336 17 3.75 17H14.25C14.664 17 15 16.664 15 16.25C15 15.836 14.664 15.5 14.25 15.5Z"
          fill={fill}
        />
        <path
          d="M7.98701 13.539C8.22101 13.863 8.60001 14.056 9.00001 14.056C9.40001 14.056 9.778 13.862 10.012 13.539L14.033 7.983C14.31 7.6 14.348 7.102 14.134 6.681C13.919 6.261 13.493 6 13.021 6H11.5V2.75C11.5 1.785 10.715 1 9.75001 1H8.25001C7.28501 1 6.50001 1.785 6.50001 2.75V6H4.97901C4.50701 6 4.081 6.261 3.866 6.681C3.652 7.101 3.69002 7.6 3.96702 7.983L7.98701 13.539Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ArrowBoldDownToLine;
