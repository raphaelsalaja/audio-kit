import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveSearch({
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
          d="M14.659 8.84099L14.1653 8.34727C13.793 8.44692 13.4022 8.5 13 8.5C10.5148 8.5 8.5 6.48524 8.5 4C8.5 3.28158 8.66836 2.60248 8.96778 2H4.75C3.23054 2 2 3.23203 2 4.75V11.25C2 11.6642 2.33579 12 2.75 12H5.5V14.5H12.5V12H15.25C15.6642 12 16 11.6642 16 11.25V9.48615C15.5101 9.4317 15.0347 9.21664 14.659 8.84099Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12 11H14H16V13.25C16 14.767 14.767 16 13.25 16H4.75C3.233 16 2 14.767 2 13.25V11H3.5H6C6.414 11 6.75 11.336 6.75 11.75V13.25C6.75 13.388 6.862 13.5 7 13.5H11C11.138 13.5 11.25 13.388 11.25 13.25V11.75C11.25 11.336 11.586 11 12 11Z"
          fill={fill}
        />
        <path
          d="M13 1C11.3432 1 10 2.34319 10 4C10 5.65681 11.3432 7 13 7C13.5563 7 14.0773 6.84855 14.524 6.58462L15.7197 7.78033C16.0126 8.07323 16.4874 8.07323 16.7803 7.78033C17.0732 7.48744 17.0732 7.01256 16.7803 6.71967L15.5846 5.52396C15.8485 5.07733 16 4.55635 16 4C16 2.34319 14.6568 1 13 1ZM11.5 4C11.5 3.17161 12.1716 2.5 13 2.5C13.8284 2.5 14.5 3.17161 14.5 4C14.5 4.82839 13.8284 5.5 13 5.5C12.1716 5.5 11.5 4.82839 11.5 4Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ArchiveSearch;
