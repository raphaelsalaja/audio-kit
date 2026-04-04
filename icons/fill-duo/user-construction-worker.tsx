import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserConstructionWorker({
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
          d="M9 1.5C9.41421 1.5 9.75 1.83579 9.75 2.25H8.25C8.25 1.83579 8.58579 1.5 9 1.5Z"
          fill={fill}
        />
        <path
          d="M12.75 5.75C13.1642 5.75 13.5 6.08579 13.5 6.5C13.5 8.98521 11.4852 11 9 11C6.51479 11 4.5 8.98521 4.5 6.5C4.5 6.08579 4.83579 5.75 5.25 5.75H12.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 12C6.21287 12 3.75882 13.4271 2.32789 15.5856C2.17525 15.8158 2.16154 16.1114 2.29221 16.3548C2.42287 16.5981 2.67676 16.75 2.953 16.75H15.047C15.3232 16.75 15.5771 16.5982 15.7078 16.3548C15.8384 16.1115 15.8248 15.816 15.6722 15.5857C14.2412 13.4259 11.787 12 9 12Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.00006 2C6.85839 2 5.06664 3.49544 4.61154 5.5H4C3.58579 5.5 3.25 5.83579 3.25 6.25C3.25 6.66421 3.58579 7 4 7H14C14.4142 7 14.75 6.66421 14.75 6.25C14.75 5.83579 14.4142 5.5 14 5.5H13.3886C12.9335 3.49544 11.1417 2 9.00006 2ZM9.00006 3.5C9.259 3.5 9.51029 3.53281 9.75 3.5945V4C9.75 4.41421 9.41421 4.75 9 4.75C8.58579 4.75 8.25 4.41421 8.25 4V3.59452C8.48974 3.53282 8.74107 3.5 9.00006 3.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default UserConstructionWorker;
