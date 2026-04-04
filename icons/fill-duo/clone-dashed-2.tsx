import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloneDashed2({
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
          d="M7.75 5H13.75C15.2666 5 16.5 6.2334 16.5 7.75V13.75C16.5 15.2666 15.2666 16.5 13.75 16.5H7.75C6.2334 16.5 5 15.2666 5 13.75V7.75C5 6.2334 6.2334 5 7.75 5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.25 1.5H5.25C5.6641 1.5 6 1.8359 6 2.25C6 2.6641 5.6641 3 5.25 3H4.25C3.5605 3 3 3.5605 3 4.25V5.25C3 5.6641 2.6641 6 2.25 6C1.8359 6 1.5 5.6641 1.5 5.25V4.25C1.5 2.7334 2.7334 1.5 4.25 1.5Z"
          fill={fill}
        />
        <path
          d="M4.25 13H5V11.5H4.25C3.5605 11.5 3 10.9395 3 10.25V9.25C3 8.8359 2.6641 8.5 2.25 8.5C1.8359 8.5 1.5 8.8359 1.5 9.25V10.25C1.5 11.7666 2.7334 13 4.25 13Z"
          fill={fill}
        />
        <path
          d="M9.25 3H10.25C10.9395 3 11.5 3.5605 11.5 4.25V5H13V4.25C13 2.7334 11.7666 1.5 10.25 1.5H9.25C8.8359 1.5 8.5 1.8359 8.5 2.25C8.5 2.6641 8.8359 3 9.25 3Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CloneDashed2;
