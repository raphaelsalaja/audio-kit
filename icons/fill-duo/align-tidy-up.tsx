import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlignTidyUp({
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
          d="M6.75 4.75C6.75 3.78334 7.53393 3 8.5 3H9.5C10.4661 3 11.25 3.78334 11.25 4.75V13.25C11.25 14.2167 10.4661 15 9.5 15H8.5C7.53393 15 6.75 14.2167 6.75 13.25V4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M0.5 4.75C0.5 3.78334 1.28393 3 2.25 3H3.25C4.21607 3 5 3.78334 5 4.75V13.25C5 14.2167 4.21607 15 3.25 15H2.25C1.28393 15 0.5 14.2167 0.5 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M13 4.75C13 3.78334 13.7839 3 14.75 3H15.75C16.7161 3 17.5 3.78334 17.5 4.75V13.25C17.5 14.2167 16.7161 15 15.75 15H14.75C13.7839 15 13 14.2167 13 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default AlignTidyUp;
