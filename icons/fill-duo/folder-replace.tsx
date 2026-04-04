import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderReplace({
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
          d="M2.75055 1C1.78434 1 1.00055 1.78379 1.00055 2.75V7.75C1.00055 8.99221 2.00834 10 3.25055 10H9.25055C10.4928 10 11.5005 8.99221 11.5005 7.75V5.25C11.5005 4.00779 10.4928 3 9.25055 3H6.73159L5.63324 1.6478C5.30112 1.23719 4.80059 1 4.27455 1H2.75055Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.25 8C7.28379 8 6.5 8.78379 6.5 9.75V14.75C6.5 15.9922 7.50779 17 8.75 17H14.75C15.9922 17 17 15.9922 17 14.75V12.25C17 11.0078 15.9922 10 14.75 10H12.231L11.1327 8.6478C10.8006 8.23719 10.3 8 9.774 8H8.25Z"
          fill={fill}
        />
        <path
          d="M2.25 11C2.66421 11 3 11.3358 3 11.75C3 12.8631 3.80901 13.7887 4.87033 13.9685C5.27872 14.0378 5.55367 14.4249 5.48445 14.8333C5.41524 15.2417 5.02806 15.5167 4.61967 15.4475C2.84899 15.1473 1.5 13.6069 1.5 11.75C1.5 11.3358 1.83579 11 2.25 11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.5155 5.16666C12.5848 4.75827 12.9719 4.48332 13.3803 4.55254C15.151 4.85265 16.5 6.39307 16.5 8.25C16.5 8.66421 16.1642 9 15.75 9C15.3358 9 15 8.66421 15 8.25C15 7.13692 14.191 6.21133 13.1297 6.03144C12.7213 5.96222 12.4463 5.57505 12.5155 5.16666Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FolderReplace;
