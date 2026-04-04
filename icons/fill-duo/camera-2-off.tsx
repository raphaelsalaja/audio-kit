import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Camera2Off({
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
          d="M6.18198 15H14.25C15.7693 15 17 13.7687 17 12.25V5.75C17 5.29507 16.8896 4.86593 16.694 4.48795L6.18198 15Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.9183 3.08172C14.7043 3.02834 14.4805 3 14.25 3H3.75C2.23069 3 1 4.23128 1 5.75V12.25C1 13.5383 1.88559 14.6198 3.08172 14.9183L14.9183 3.08172Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.25 7C4.664 7 5 6.6642 5 6.25C5 5.8358 4.664 5.5 4.25 5.5C3.836 5.5 3.5 5.8358 3.5 6.25C3.5 6.6642 3.836 7 4.25 7Z"
          fill={fill}
        />
        <path
          d="M3.5 1.25C3.5 0.835786 3.83579 0.5 4.25 0.5H6.75C7.16421 0.5 7.5 0.835786 7.5 1.25C7.5 1.66421 7.16421 2 6.75 2H4.25C3.83579 2 3.5 1.66421 3.5 1.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.9242 6.07583C11.3721 5.71184 10.7108 5.5 10 5.5C8.06675 5.5 6.5 7.06702 6.5 9C6.5 9.71077 6.71184 10.3721 7.07584 10.9242L11.9242 6.07583Z"
          fill={fill}
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.86877 12.3132C9.22361 12.4343 9.60412 12.5 9.99999 12.5C11.9332 12.5 13.5 10.933 13.5 9C13.5 8.60414 13.4343 8.22364 13.3132 7.86879L8.86877 12.3132Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Camera2Off;
