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
          d="M9.25 1.5H10.25C11.7666 1.5 13 2.7334 13 4.25V5.75C13 6.1641 12.6641 6.5 12.25 6.5C11.8359 6.5 11.5 6.1641 11.5 5.75V4.25C11.5 3.5605 10.9395 3 10.25 3H9.25C8.8359 3 8.5 2.6641 8.5 2.25C8.5 1.8359 8.8359 1.5 9.25 1.5Z"
          fill={secondaryfill}
        />
        <path
          d="M4.25 1.5H5.25C5.6641 1.5 6 1.8359 6 2.25C6 2.6641 5.6641 3 5.25 3H4.25C3.5605 3 3 3.5605 3 4.25V5.25C3 5.6641 2.6641 6 2.25 6C1.8359 6 1.5 5.6641 1.5 5.25V4.25C1.5 2.7334 2.7334 1.5 4.25 1.5Z"
          fill={secondaryfill}
        />
        <path
          d="M2.25 8.5C2.6641 8.5 3 8.8359 3 9.25V10.25C3 10.9395 3.5605 11.5 4.25 11.5H5.75C6.1641 11.5 6.5 11.8359 6.5 12.25C6.5 12.6641 6.1641 13 5.75 13H4.25C2.7334 13 1.5 11.7666 1.5 10.25V9.25C1.5 8.8359 1.8359 8.5 2.25 8.5Z"
          fill={secondaryfill}
        />
        <path
          d="M13.75 5H7.75C6.23122 5 5 6.23122 5 7.75V13.75C5 15.2688 6.23122 16.5 7.75 16.5H13.75C15.2688 16.5 16.5 15.2688 16.5 13.75V7.75C16.5 6.23122 15.2688 5 13.75 5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CloneDashed2;
