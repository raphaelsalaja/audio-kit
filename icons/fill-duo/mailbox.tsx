import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Mailbox({
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
          d="M6.5 4.75C6.5 4.33579 4.83579 4 5.25 4H12.75C15.0972 4 17 5.90279 17 8.25V13.25C17 14.2162 16.2162 15 15.25 15H5.25C4.83579 15 6.5 14.6642 6.5 14.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.25 0C10.8358 0 10.5 0.335786 10.5 0.75V2V2.25V6.25C10.5 6.66421 10.8358 7 11.25 7C11.6642 7 12 6.66421 12 6.25V3H14.25C14.6642 3 15 2.66421 15 2.25V0.75C15 0.335786 14.6642 0 14.25 0H11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.25 4C2.90379 4 1 5.90379 1 8.25V13.25C1 14.2162 1.78379 15 2.75 15H7.75C7.83488 15 7.91835 14.994 8 14.9823V16.25C8 16.6642 8.33579 17 8.75 17C9.16421 17 9.5 16.6642 9.5 16.25V13.25V13V8.25C9.5 5.90379 7.59621 4 5.25 4ZM6 8.25C6 7.83579 5.66421 7.5 5.25 7.5C4.83579 7.5 4.5 7.83579 4.5 8.25V9.75C4.5 10.1642 4.83579 10.5 5.25 10.5C5.66421 10.5 6 10.1642 6 9.75V8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Mailbox;
