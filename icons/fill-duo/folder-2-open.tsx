import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Folder2Open({
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
          d="M1.5 4.75C1.5 3.23079 2.73079 2 4.25 2H6.075C6.88233 2 7.64813 2.35485 8.17042 2.96923L9.47009 4.5H13.749C15.2682 4.5 16.499 5.73079 16.499 7.25V8.25C16.499 8.2893 16.4959 8.32854 16.4898 8.36735L15.46 14.8674C15.4023 15.2317 15.0882 15.5 14.7193 15.5H4.25C2.73079 15.5 1.5 14.2692 1.5 12.75V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.97778 9.16508C4.24199 8.18232 5.13314 7.5 6.15 7.5H15.543C17.0234 7.5 18.1006 8.90538 17.7152 10.335L16.8722 13.465C16.5491 14.6654 15.4601 15.5 14.217 15.5H5.208C3.72762 15.5 2.65048 14.0947 3.03578 12.6651L3.97778 9.16508Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Folder2Open;
