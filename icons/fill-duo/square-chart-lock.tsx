import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareChartLock({
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
          d="M14 9.5V13.75C14 15.2692 12.7692 16.5 11.25 16.5H2.75C1.23079 16.5 0 15.2692 0 13.75V5.25C0 3.73079 1.23079 2.5 2.75 2.5H9.90508C9.34451 3.08373 9 3.8763 9 4.75V6.25C9 8.04464 10.4554 9.5 12.25 9.5H14Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M3.75 7.75C4.16421 7.75 4.5 8.08579 4.5 8.5V12.75C4.5 13.1642 4.16421 13.5 3.75 13.5C3.33579 13.5 3 13.1642 3 12.75V8.5C3 8.08579 3.33579 7.75 3.75 7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.25 10C10.6642 10 11 10.3358 11 10.75V12.75C11 13.1642 10.6642 13.5 10.25 13.5C9.83579 13.5 9.5 13.1642 9.5 12.75V10.75C9.5 10.3358 9.83579 10 10.25 10Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 5.5C7.41421 5.5 7.75 5.83579 7.75 6.25V12.75C7.75 13.1642 7.41421 13.5 7 13.5C6.58579 13.5 6.25 13.1642 6.25 12.75V6.25C6.25 5.83579 6.58579 5.5 7 5.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.5 2.25C13.5 1.83621 13.8362 1.5 14.25 1.5C14.6638 1.5 15 1.83621 15 2.25V3H13.5V2.25ZM12 3.01774V2.25C12 1.00779 13.0078 0 14.25 0C15.4922 0 16.5 1.00779 16.5 2.25V3.01774C17.3479 3.13911 18 3.86866 18 4.75V6.25C18 7.21621 17.2162 8 16.25 8H12.25C11.2838 8 10.5 7.21621 10.5 6.25V4.75C10.5 3.86866 11.1521 3.13911 12 3.01774Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SquareChartLock;
