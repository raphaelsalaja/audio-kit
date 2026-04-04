import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LockCircleOpen({
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
          d="M3.5 11.5C3.5 8.46239 5.96239 6 9 6C12.0376 6 14.5 8.46239 14.5 11.5C14.5 14.5376 12.0376 17 9 17C5.96239 17 3.5 14.5376 3.5 11.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 10.25C9.41421 10.25 9.75 10.5858 9.75 11V12C9.75 12.4142 9.41421 12.75 9 12.75C8.58579 12.75 8.25 12.4142 8.25 12V11C8.25 10.5858 8.58579 10.25 9 10.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 4.5C7 3.39521 7.89521 2.5 9 2.5C10.1048 2.5 11 3.39521 11 4.5C11 4.91421 11.3358 5.25 11.75 5.25C12.1642 5.25 12.5 4.91421 12.5 4.5C12.5 2.56679 10.9332 1 9 1C7.06679 1 5.5 2.56679 5.5 4.5V7.25713C5.94631 6.88854 6.45177 6.58902 7 6.37493V4.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LockCircleOpen;
