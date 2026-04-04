import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DeleteLeft({
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
          d="M5.477 3C4.94856 3 4.4492 3.23831 4.11678 3.64946L0.167086 8.52808C-0.0556953 8.80325 -0.0556953 9.19675 0.167086 9.47192L4.11678 14.3505C4.4492 14.7615 4.94873 15 5.477 15H13.25C14.7692 15 16 13.7692 16 12.25V5.75C16 4.23079 14.7692 3 13.25 3H5.477Z"
          fill={secondaryfill}
          fillOpacity="0.4"
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

export default DeleteLeft;
