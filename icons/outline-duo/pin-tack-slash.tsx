import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinTackSlash({
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
          d="M12.25 5.74997V3.75C12.25 2.645 11.355 1.75 10.25 1.75H7.75C6.645 1.75 5.75 2.645 5.75 3.75V8C5.421 8.347 5.053 8.801 4.719 9.375C4.069 10.49 3.839 11.551 3.75 12.25H5.74997L12.25 5.74997Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14.25 12.25H8.93195L12.5839 8.59802C12.785 8.85168 13.0163 9.08558 13.281 9.375C13.932 10.49 14.161 11.551 14.25 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.25V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 5.75V3.75C12.25 2.645 11.355 1.75 10.25 1.75H7.75C6.645 1.75 5.75 2.645 5.75 3.75V8C5.421 8.347 5.053 8.801 4.719 9.375C4.069 10.49 3.839 11.551 3.75 12.25H5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 12.25H14.25C14.161 11.551 13.932 10.49 13.281 9.37497C13.2295 9.28647 13.1771 9.20096 13.1241 9.11816"
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

export default PinTackSlash;
