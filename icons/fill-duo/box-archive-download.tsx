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
          d="M3.25 5.5C2.83579 5.5 2.5 5.83579 2.5 6.25V13.25C2.5 14.7692 3.73079 16 5.25 16H11.318L10.659 15.341C9.78033 14.4623 9.78033 13.0377 10.659 12.159C11.162 11.656 11.844 11.4409 12.5 11.5138V11.25C12.5 10.0074 13.5074 9 14.75 9C15.013 9 15.2654 9.04512 15.5 9.12803V6.25C15.5 5.83579 15.1642 5.5 14.75 5.5H3.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1 3.75C1 2.78334 1.78393 2 2.75 2H15.25C16.2161 2 17 2.78334 17 3.75V5.25C17 6.21666 16.2161 7 15.25 7H2.75C1.78393 7 1 6.21666 1 5.25V3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.5 11.25C15.5 10.8358 15.1642 10.5 14.75 10.5C14.3358 10.5 14 10.8358 14 11.25V14.4393L12.7803 13.2197C12.4874 12.9268 12.0126 12.9268 11.7197 13.2197C11.4268 13.5126 11.4268 13.9874 11.7197 14.2803L14.2197 16.7803C14.5126 17.0732 14.9874 17.0732 15.2803 16.7803L17.7803 14.2803C18.0732 13.9874 18.0732 13.5126 17.7803 13.2197C17.4874 12.9268 17.0126 12.9268 16.7197 13.2197L15.5 14.4393V11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BoxArchiveDownload;
