import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DeleteRight({
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
          d="M2 5.75C2 4.23079 3.23079 3 4.75 3H12.523C13.0513 3 13.5505 3.23816 13.8829 3.64908L17.8329 8.52808C18.0557 8.80325 18.0557 9.19675 17.8329 9.47192L13.8832 14.3505C13.5508 14.7615 13.0513 15 12.523 15H4.75C3.23079 15 2 13.7692 2 12.25V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L7.93934 9L6.21967 10.7197C5.92678 11.0126 5.92678 11.4874 6.21967 11.7803C6.51256 12.0732 6.98744 12.0732 7.28033 11.7803L9 10.0607L10.7197 11.7803C11.0126 12.0732 11.4874 12.0732 11.7803 11.7803C12.0732 11.4874 12.0732 11.0126 11.7803 10.7197L10.0607 9L11.7803 7.28033C12.0732 6.98744 12.0732 6.51256 11.7803 6.21967C11.4874 5.92678 11.0126 5.92678 10.7197 6.21967L9 7.93934L7.28033 6.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default DeleteRight;
