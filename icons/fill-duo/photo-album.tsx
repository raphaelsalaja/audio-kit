import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhotoAlbum({
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
          d="M3.75 2.5C2.23079 2.5 1 3.73079 1 5.25V12.75C1 14.2692 2.23079 15.5 3.75 15.5H14.25C15.7692 15.5 17 14.2692 17 12.75V5.25C17 3.73079 15.7692 2.5 14.25 2.5H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M17 12.1984L13.1942 8.38367C12.1203 7.30978 10.3795 7.30978 9.30556 8.38367L2.49664 15.1986C2.87246 15.3913 3.29848 15.5 3.74999 15.5H14.25C15.7692 15.5 17 14.2692 17 12.75V12.1984Z"
          fill={fill}
        />
        <path
          d="M5.50458 8.75C6.33258 8.75 7.00458 8.078 7.00458 7.25C7.00458 6.422 6.33258 5.75 5.50458 5.75C4.67658 5.75 4.00458 6.422 4.00458 7.25C4.00458 8.078 4.67658 8.75 5.50458 8.75Z"
          fill={fill}
        />
        <path
          d="M5.25 0.75C5.66421 0.75 6 1.08579 6 1.5V2.5H4.5V1.5C4.5 1.08579 4.83579 0.75 5.25 0.75Z"
          fill={fill}
        />
        <path
          d="M13.5 2.5V1.5C13.5 1.08579 13.1642 0.75 12.75 0.75C12.3358 0.75 12 1.08579 12 1.5V2.5H13.5Z"
          fill={fill}
        />
        <path
          d="M9.75 2.5V1.5C9.75 1.08579 9.41421 0.75 9 0.75C8.58579 0.75 8.25 1.08579 8.25 1.5V2.5H9.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PhotoAlbum;
