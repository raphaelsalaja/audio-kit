import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxLock({
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
          d="M4.75 4.5C3.23069 4.5 2 5.73128 2 7.25V13.25C2 14.7687 3.23069 16 4.75 16H9V14.75C9 13.5959 9.60113 12.583 10.5078 12.0063C10.6334 10.0492 12.2612 8.5 14.25 8.5C14.882 8.5 15.4775 8.65644 16 8.93271V7.25C16 5.73128 14.7693 4.5 13.25 4.5H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.5 12.25C13.5 11.8362 13.8362 11.5 14.25 11.5C14.6638 11.5 15 11.8362 15 12.25V13H13.5V12.25ZM12 13.0177V12.25C12 11.0078 13.0078 10 14.25 10C15.4922 10 16.5 11.0078 16.5 12.25V13.0177C17.3482 13.1391 18 13.8688 18 14.75V16.25C18 17.2161 17.2167 18 16.25 18H12.25C11.2833 18 10.5 17.2161 10.5 16.25V14.75C10.5 13.8688 11.1518 13.1391 12 13.0177Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.6445 5.89654C15.1723 5.06272 14.2771 4.5 13.25 4.5H4.75001C3.71997 4.5 2.82259 5.06594 2.35144 5.9037L3.77709 3.0288C4.24151 2.09309 5.19561 1.5 6.241 1.5H11.759C12.8044 1.5 13.7584 2.09285 14.2228 3.02856L15.6445 5.89654Z"
          fill={fill}
        />
        <path
          d="M9.00002 3.5C9.41423 3.5 9.75002 3.83579 9.75002 4.25V7.25C9.75002 7.66421 9.41423 8 9.00002 8C8.5858 8 8.25002 7.66421 8.25002 7.25V4.25C8.25002 3.83579 8.5858 3.5 9.00002 3.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BoxLock;
