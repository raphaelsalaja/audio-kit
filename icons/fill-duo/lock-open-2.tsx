import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LockOpen2({
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
          d="M3 10.25C3 8.73128 4.23069 7.5 5.75 7.5H13.25C14.7693 7.5 16 8.73128 16 10.25V14.25C16 15.7687 14.7693 17 13.25 17H5.75C4.23069 17 3 15.7687 3 14.25V10.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.5 11C9.91421 11 10.25 11.3358 10.25 11.75V12.75C10.25 13.1642 9.91421 13.5 9.5 13.5C9.08579 13.5 8.75 13.1642 8.75 12.75V11.75C8.75 11.3358 9.08579 11 9.5 11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4 1C1.79079 1 0 2.79079 0 5V6.25C0 6.66421 0.335786 7 0.75 7C1.16421 7 1.5 6.66421 1.5 6.25V5C1.5 3.61921 2.61921 2.5 4 2.5C5.38079 2.5 6.5 3.61921 6.5 5V7.5H8V5C8 2.79079 6.20921 1 4 1Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LockOpen2;
