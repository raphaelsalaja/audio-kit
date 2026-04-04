import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveSearch({
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
          d="M16.7803 6.7197L15.575 5.5144C15.8385 5.0681 16 4.5547 16 4C16 2.3457 14.6543 1 13 1C11.3457 1 10 2.3457 10 4C10 5.6543 11.3457 7 13 7C13.5547 7 14.0682 6.8384 14.5144 6.575L15.7197 7.7803C15.8662 7.9268 16.0576 8 16.25 8C16.4424 8 16.6338 7.9268 16.7803 7.7803C17.0733 7.4873 17.0733 7.0126 16.7803 6.7197ZM11.5 4C11.5 3.1729 12.1729 2.5 13 2.5C13.8271 2.5 14.5 3.1729 14.5 4C14.5 4.4126 14.3324 4.7866 14.062 5.0579C13.7906 5.3284 13.4126 5.5 13.0001 5.5C12.173 5.5 11.5 4.8271 11.5 4Z"
          fill={secondaryfill}
        />
        <path
          d="M11.75 9.5H15.25C15.6641 9.5 16 9.8359 16 10.25V13.25C16 14.7666 14.7666 16 13.25 16H4.75C3.2334 16 2 14.7666 2 13.25V4.75C2 3.23203 3.23054 2 4.75 2H7.9016C8.31581 2 8.6516 2.33579 8.6516 2.75C8.6516 3.16421 8.31581 3.5 7.9016 3.5H4.75C4.0605 3.5 3.5 4.0605 3.5 4.75V9.5H6.25C6.6641 9.5 7 9.8359 7 10.25V11.75C7 11.8877 7.1123 12 7.25 12H10.75C10.8877 12 11 11.8877 11 11.75V10.25C11 9.8359 11.3359 9.5 11.75 9.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArchiveSearch;
