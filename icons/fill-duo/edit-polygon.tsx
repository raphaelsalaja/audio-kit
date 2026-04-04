import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EditPolygon({
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
          d="M4.86403 5.00874C5.27342 5.07172 5.55425 5.45466 5.49126 5.86406L4.49126 12.3641C4.42828 12.7735 4.04534 13.0543 3.63594 12.9913C3.22654 12.9283 2.94572 12.5454 3.0087 12.136L4.0087 5.63597C4.07169 5.22657 4.45463 4.94575 4.86403 5.00874Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5 14.25C5 13.8358 5.33579 13.5 5.75 13.5H12.25C12.6642 13.5 13 13.8358 13 14.25C13 14.6642 12.6642 15 12.25 15H5.75C5.33579 15 5 14.6642 5 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.1359 5.00874C13.5453 4.94575 13.9283 5.22657 13.9913 5.63597L14.9913 12.136C15.0542 12.5454 14.7734 12.9283 14.364 12.9913C13.9546 13.0543 13.5717 12.7735 13.5087 12.3641L12.5087 5.86406C12.4457 5.45466 12.7265 5.07172 13.1359 5.00874Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.5 3.75C6.5 3.33579 6.83579 3 7.25 3H10.75C11.1642 3 11.5 3.33579 11.5 3.75C11.5 4.16421 11.1642 4.5 10.75 4.5H7.25C6.83579 4.5 6.5 4.16421 6.5 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3 2.75C3 2.05197 3.56351 1.5 4.25 1.5H6.25C6.93649 1.5 7.5 2.05197 7.5 2.75V4.75C7.5 5.44803 6.93649 6 6.25 6H4.25C3.56351 6 3 5.44803 3 4.75V2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.5 2.75C10.5 2.05197 11.0635 1.5 11.75 1.5H13.75C14.4365 1.5 15 2.05197 15 2.75V4.75C15 5.44803 14.4365 6 13.75 6H11.75C11.0635 6 10.5 5.44803 10.5 4.75V2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12 13.25C12 12.552 12.5635 12 13.25 12H15.25C15.9365 12 16.5 12.552 16.5 13.25V15.25C16.5 15.948 15.9365 16.5 15.25 16.5H13.25C12.5635 16.5 12 15.948 12 15.25V13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 13.25C1.5 12.552 2.06351 12 2.75 12H4.75C5.43649 12 6 12.552 6 13.25V15.25C6 15.948 5.43649 16.5 4.75 16.5H2.75C2.06351 16.5 1.5 15.948 1.5 15.25V13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default EditPolygon;
