import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Workstation({
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
          d="M12.3741 11H5.62594L4.73791 15.8842C4.66381 16.2917 4.27338 16.562 3.86584 16.4879C3.45831 16.4138 3.18801 16.0234 3.26211 15.6158L4.10135 11H2.25C1.83579 11 1.5 10.6642 1.5 10.25C1.5 9.83579 1.83579 9.5 2.25 9.5H4.98564C4.99462 9.49984 5.00362 9.49984 5.01265 9.5H12.9874C12.9964 9.49984 13.0054 9.49984 13.0144 9.5H15.75C16.1642 9.5 16.5 9.83579 16.5 10.25C16.5 10.6642 16.1642 11 15.75 11H13.8987L14.7379 15.6158C14.812 16.0234 14.5417 16.4138 14.1342 16.4879C13.7266 16.562 13.3362 16.2917 13.2621 15.8842L12.3741 11Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13.25 7.25C12.56 7.25 12 7.81 12 8.5H14.5C14.5 7.81 13.94 7.25 13.25 7.25Z"
          fill={fill}
        />
        <path
          d="M6.75 1C5.78334 1 5 1.78393 5 2.75V5.25C5 6.21607 5.78334 7 6.75 7H8.25V7.74998C8.25 8.1642 8.58579 8.49998 9 8.49998C9.41421 8.49998 9.75 8.1642 9.75 7.74998V7H11.25C12.2167 7 13 6.21607 13 5.25V2.75C13 1.78393 12.2167 1 11.25 1H6.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Workstation;
