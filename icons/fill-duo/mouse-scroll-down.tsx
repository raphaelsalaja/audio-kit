import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MouseScrollDown({
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
          d="M1.5 5.75C1.5 3.67877 3.1789 2 5.25 2H7.25C9.32098 2 11 3.67875 11 5.75V12.25C11 14.3212 9.32098 16 7.25 16H5.25C3.1789 16 1.5 14.3212 1.5 12.25V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M16 3.75C16 3.33579 15.6642 3 15.25 3C14.8358 3 14.5 3.33579 14.5 3.75V12.4393L13.7803 11.7197C13.4874 11.4268 13.0126 11.4268 12.7197 11.7197C12.4268 12.0126 12.4268 12.4874 12.7197 12.7803L14.7197 14.7803C15.0126 15.0732 15.4874 15.0732 15.7803 14.7803L17.7803 12.7803C18.0732 12.4874 18.0732 12.0126 17.7803 11.7197C17.4874 11.4268 17.0126 11.4268 16.7197 11.7197L16 12.4393V3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.25 5.5C6.66421 5.5 7 5.83579 7 6.25V8.75C7 9.16421 6.66421 9.5 6.25 9.5C5.83579 9.5 5.5 9.16421 5.5 8.75V6.25C5.5 5.83579 5.83579 5.5 6.25 5.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MouseScrollDown;
