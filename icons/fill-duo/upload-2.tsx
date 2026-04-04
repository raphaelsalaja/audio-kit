import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Upload2({
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
          d="M13.75 15.5H4.25C2.7334 15.5 1.5 14.2666 1.5 12.75V5.25C1.5 3.7334 2.7334 2.5 4.25 2.5H13.75C15.2666 2.5 16.5 3.7334 16.5 5.25V12.75C16.5 14.2666 15.2666 15.5 13.75 15.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12 7.00002C11.8081 7.00002 11.6162 6.9268 11.4697 6.7803L9 4.31057L6.53031 6.7803C6.23731 7.0733 5.7627 7.0733 5.4698 6.7803C5.1769 6.4873 5.1768 6.01277 5.4698 5.71987L8.4698 2.71987C8.7628 2.42687 9.23741 2.42687 9.53031 2.71987L12.5303 5.71987C12.8233 6.01287 12.8233 6.4874 12.5303 6.7803C12.3838 6.9268 12.1919 7.00002 12 7.00002Z"
          fill={fill}
        />
        <path
          d="M9 12.5C8.5859 12.5 8.25 12.1641 8.25 11.75V3.5C8.25 3.0859 8.5859 2.75 9 2.75C9.4141 2.75 9.75 3.0859 9.75 3.5V11.75C9.75 12.1641 9.4141 12.5 9 12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Upload2;
