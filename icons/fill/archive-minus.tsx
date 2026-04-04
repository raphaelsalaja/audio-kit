import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveMinus({
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
          d="M16.25 5H11.25C10.8359 5 10.5 4.6641 10.5 4.25C10.5 3.8359 10.8359 3.5 11.25 3.5H16.25C16.6641 3.5 17 3.8359 17 4.25C17 4.6641 16.6641 5 16.25 5Z"
          fill={secondaryfill}
        />
        <path
          d="M16 7.25V13.25C16 14.7666 14.7666 16 13.25 16H4.75C3.2334 16 2 14.7666 2 13.25V4.75C2 3.23203 3.23054 2 4.75 2H8.65302C9.06723 2 9.40302 2.33579 9.40302 2.75C9.40302 3.16421 9.06723 3.5 8.65302 3.5H4.75C4.0605 3.5 3.5 4.0605 3.5 4.75V9.5H6.25C6.6641 9.5 7 9.8359 7 10.25V11.75C7 11.8877 7.1123 12 7.25 12H10.75C10.8877 12 11 11.8877 11 11.75V10.25C11 9.8359 11.3359 9.5 11.75 9.5H14.5V7.25C14.5 6.83579 14.8358 6.5 15.25 6.5C15.6642 6.5 16 6.83579 16 7.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArchiveMinus;
