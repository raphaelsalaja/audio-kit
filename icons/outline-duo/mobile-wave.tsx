import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MobileWave({
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
          d="M12.25 1.75H5.75C4.64543 1.75 3.75 2.64543 3.75 3.75V14.25C3.75 15.3546 4.64543 16.25 5.75 16.25H12.25C13.3546 16.25 14.25 15.3546 14.25 14.25V3.75C14.25 2.64543 13.3546 1.75 12.25 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 11.25V14.25C14.25 15.355 13.355 16.25 12.25 16.25H5.75C4.645 16.25 3.75 15.355 3.75 14.25V11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 6.75V3.75C3.75 2.645 4.645 1.75 5.75 1.75H12.25C13.355 1.75 14.25 2.645 14.25 3.75V6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1 9.25H5.25C5.802 9.25 6.25 8.802 6.25 8.25V6.625C6.25 5.866 6.866 5.25 7.625 5.25C8.384 5.25 9 5.866 9 6.625V11.375C9 12.134 9.616 12.75 10.375 12.75C11.134 12.75 11.75 12.134 11.75 11.375V9.75C11.75 9.198 12.198 8.75 12.75 8.75H17"
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

export default MobileWave;
