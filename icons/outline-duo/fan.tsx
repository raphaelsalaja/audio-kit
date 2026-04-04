import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Fan({
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
          d="M16.25 6.746C13.237 5.446 10.552 5.249 9 5.249C7.448 5.249 4.763 5.447 1.75 6.746V3.247C4.763 1.947 7.448 1.75 9 1.75C10.552 1.75 13.237 1.948 16.25 3.247V6.746Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 10.75C9.82843 10.75 10.5 10.0784 10.5 9.25C10.5 8.42157 9.82843 7.75 9 7.75C8.17157 7.75 7.5 8.42157 7.5 9.25C7.5 10.0784 8.17157 10.75 9 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 16.25V13.24"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 13.24V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 9.25C14.881 9.867 14.305 10.681 13.438 11.479C12.446 12.393 11.454 12.934 10.751 13.25H9.00098C8.41798 13.25 7.83398 13.25 7.25098 13.25C6.54698 12.934 5.55598 12.393 4.56298 11.479C3.69598 10.681 3.11898 9.866 2.75098 9.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 6.746C13.237 5.446 10.552 5.249 9 5.249C7.448 5.249 4.763 5.447 1.75 6.746V3.247C4.763 1.947 7.448 1.75 9 1.75C10.552 1.75 13.237 1.948 16.25 3.247V6.746Z"
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

export default Fan;
