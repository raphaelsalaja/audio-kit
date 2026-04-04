import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserGlobe({
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
          d="M11.5 11.75C14.399 11.75 16.75 9.399 16.75 6.5C16.75 3.601 14.399 1.25 11.5 1.25C9.04198 1.25 6.97798 2.81312 6.40698 5.09412C8.08898 5.66012 9.30098 7.377 9.30098 9.25C9.30098 9.897 9.47918 10.4583 10.125 11C10.892 11.439 10.553 11.75 11.5 11.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M5.05103 11.25C6.15563 11.25 7.05103 10.355 7.05103 9.25C7.05103 8.145 6.15563 7.25 5.05103 7.25C3.94643 7.25 3.05103 8.145 3.05103 9.25C3.05103 10.355 3.94653 11.25 5.05103 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.25 16.5C1.775 14.903 3.27799 13.75 5.05099 13.75C6.82399 13.75 8.32701 14.903 8.85201 16.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 11.75C12.6996 11.75 13.672 9.399 13.672 6.5C13.672 3.601 12.6996 1.25 11.5 1.25C10.3004 1.25 9.328 3.601 9.328 6.5C9.328 9.399 10.3004 11.75 11.5 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 11.75C14.399 11.75 16.75 9.399 16.75 6.5C16.75 3.601 14.399 1.25 11.5 1.25C9.3059 1.25 7.4459 2.60469 6.6637 4.51819"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.7351 6.75H9.33105"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default UserGlobe;
