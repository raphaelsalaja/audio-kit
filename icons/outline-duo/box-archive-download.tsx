import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxArchiveDownload({
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
          d="M12.5 11.5138V11.25C12.5 10.0074 13.5074 9 14.75 9V6.25H3.25V13.25C3.25 14.355 4.145 15.25 5.25 15.25H9.71549C9.9185 15.25 10.1332 15.2017 10.2574 15.0411C10.3024 14.9828 10.3285 14.9229 10.3018 14.8767C9.8033 14.016 9.92238 12.8957 10.659 12.159C11.162 11.656 11.844 11.4409 12.5 11.5138Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M17.25 13.75L14.75 16.25L12.25 13.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 16V11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.65201 15.25H5.25C4.145 15.25 3.25 14.355 3.25 13.25V6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 6.25V8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 2.75H2.75C2.19772 2.75 1.75 3.19772 1.75 3.75V5.25C1.75 5.80228 2.19772 6.25 2.75 6.25H15.25C15.8023 6.25 16.25 5.80228 16.25 5.25V3.75C16.25 3.19772 15.8023 2.75 15.25 2.75Z"
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

export default BoxArchiveDownload;
