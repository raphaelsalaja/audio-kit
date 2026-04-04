import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function NotebookBookmark({
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
          d="M5.25 1C3.73128 1 2.5 2.23069 2.5 3.75V14.25C2.5 15.7693 3.73128 17 5.25 17H12.75C14.2687 17 15.5 15.7693 15.5 14.25V3.75C15.5 2.23069 14.2687 1 12.75 1H5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13 1H9V5.00001C9 5.20201 9.122 5.38502 9.309 5.46202C9.496 5.54102 9.71 5.49701 9.854 5.35401L11 4.20802L12.146 5.35401C12.242 5.45001 12.37 5.50001 12.5 5.50001C12.564 5.50001 12.63 5.48802 12.691 5.46202C12.878 5.38502 13 5.20201 13 5.00001V1Z"
          fill={fill}
        />
        <path
          d="M5.25 17H6V1H5.25C3.73128 1 2.5 2.23069 2.5 3.75V14.25C2.5 15.7693 3.73128 17 5.25 17Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default NotebookBookmark;
