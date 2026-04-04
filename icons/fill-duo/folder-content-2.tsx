import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderContent2({
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
          d="M8.2105 3.66218C7.69563 2.93283 6.85802 2.5 5.966 2.5H14.25C15.7692 2.5 17 3.73079 17 5.25V8.25C17 6.73079 15.7692 5.5 14.25 5.5H9.5119L8.2105 3.66218Z"
          fill={fill}
        />
        <path
          d="M1 5.25C1 3.73079 2.23079 2.5 3.75 2.5H5.966C6.85802 2.5 7.69563 2.93283 8.2105 3.66218L9.5119 5.5H14.25C15.7692 5.5 17 6.73079 17 8.25V12.75C17 14.2692 15.7692 15.5 14.25 15.5H3.75C2.23079 15.5 1 14.2692 1 12.75V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FolderContent2;
