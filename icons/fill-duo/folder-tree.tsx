import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderTree({
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
          d="M8 11.75C8 10.7838 8.78379 10 9.75 10H10.796C11.6886 10 12 10.5 12.464 11.2668H14.25C15.2162 11.2668 16 12.0506 16 13.0168V15.25C16 16.2162 15.2162 17 14.25 17H9.75C8.78379 17 8 16.2162 8 15.25V11.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8 2.75C8 1.78379 8.78379 1 9.75 1H10.796C11.6886 1 12 1.5 12.464 2.26684H14.25C15.2162 2.26684 16 3.05062 16 4.01684V6.25C16 7.21621 15.2162 8 14.25 8H9.75C8.78379 8 8 7.21621 8 6.25V2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.5 1.75C3.5 1.33579 3.16421 1 2.75 1C2.33579 1 2 1.33579 2 1.75V3V3.25V12.25C2 13.4922 3.00779 14.5 4.25 14.5H5.75C6.16421 14.5 6.5 14.1642 6.5 13.75C6.5 13.3358 6.16421 13 5.75 13H4.25C3.83621 13 3.5 12.6638 3.5 12.25V5.37187C3.73461 5.45484 3.98705 5.5 4.25 5.5H5.75C6.16421 5.5 6.5 5.16421 6.5 4.75C6.5 4.33579 6.16421 4 5.75 4H4.25C3.83621 4 3.5 3.66379 3.5 3.25V3V1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FolderTree;
