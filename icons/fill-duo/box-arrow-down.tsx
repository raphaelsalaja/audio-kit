import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxArrowDown({
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
          d="M4.75 4.5C3.23069 4.5 2 5.73128 2 7.25V13.25C2 14.7687 3.23069 16 4.75 16H10.3787C9.79319 15.1256 9.88665 13.9314 10.659 13.159C11.162 12.656 11.844 12.4409 12.5 12.5138V12.25C12.5 11.0074 13.5074 10 14.75 10C15.2125 10 15.6425 10.1396 16 10.3789V7.25C16 5.73128 14.7693 4.5 13.25 4.5H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.5 12.25C15.5 11.8358 15.1642 11.5 14.75 11.5C14.3358 11.5 14 11.8358 14 12.25V15.4393L12.7803 14.2197C12.4874 13.9268 12.0126 13.9268 11.7197 14.2197C11.4268 14.5126 11.4268 14.9874 11.7197 15.2803L14.2197 17.7803C14.5126 18.0732 14.9874 18.0732 15.2803 17.7803L17.7803 15.2803C18.0732 14.9874 18.0732 14.5126 17.7803 14.2197C17.4874 13.9268 17.0126 13.9268 16.7197 14.2197L15.5 15.4393V12.25Z"
          fill={fill}
        />
        <path
          d="M15.6445 5.89654C15.1723 5.06272 14.2771 4.5 13.25 4.5H4.75C3.71996 4.5 2.82259 5.06594 2.35143 5.9037L3.77709 3.0288C4.24151 2.09309 5.1956 1.5 6.241 1.5H11.759C12.8044 1.5 13.7584 2.09285 14.2228 3.02856L15.6445 5.89654Z"
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

export default BoxArrowDown;
