import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Monitor({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M15 21.5L9 18.5V16.5L15 19.5V21.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M17.5 18.25L3.5 11.25" stroke={fill} />
        <path
          d="M17.5 21V9.5L20.5 8V19.5L17.5 21Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M17.5 9.5L20.5 8" stroke={fill} />
        <path d="M3.5 2.5L17.5 9.5L17.5 21" stroke={fill} />
        <path
          d="M9 16.6824V17.882C9 18.2608 8.78601 18.607 8.44723 18.7764L6.8944 19.5529C6.52588 19.7372 6.52588 20.263 6.8944 20.4473L11.5528 22.7765C11.8343 22.9173 12.1657 22.9173 12.4472 22.7765L14.4474 21.7764C14.7862 21.607 15.0002 21.2607 15.0002 20.8819V19.7189"
          stroke={fill}
        />
        <path
          d="M3.5 13.382V3.11803C3.5 2.73926 3.714 2.393 4.05279 2.22361L5.82918 1.33541C6.25147 1.12426 6.74853 1.12426 7.17082 1.33541L19.9472 7.72361C20.286 7.893 20.5 8.23926 20.5 8.61803V18.882C20.5 19.2608 20.286 19.607 19.9472 19.7764L18.1708 20.6646C17.7485 20.8758 17.2515 20.8758 16.8292 20.6646L4.05279 14.2764C3.714 14.107 3.5 13.7608 3.5 13.382Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Monitor;
