import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchivePencil({
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
          d="M16 8.82782V13.25C16 14.7666 14.7666 16 13.25 16H4.75C3.2334 16 2 14.7666 2 13.25V4.75C2 3.23203 3.23054 2 4.75 2H9.17209C9.5863 2 9.92209 2.33579 9.92209 2.75C9.92209 3.16421 9.5863 3.5 9.17209 3.5H4.75C4.0605 3.5 3.5 4.0605 3.5 4.75V9.5H6.25C6.6641 9.5 7 9.8359 7 10.25V11.75C7 11.8877 7.1123 12 7.25 12H10.75C10.8877 12 11 11.8877 11 11.75V10.25C11 9.8359 11.3359 9.5 11.75 9.5H14.5V8.82782C14.5 8.41361 14.8358 8.07782 15.25 8.07782C15.6642 8.07782 16 8.41361 16 8.82782Z"
          fill={fill}
        />
        <path
          d="M17.3652 0.978556L17.0298 0.643156C16.3696 -0.0184436 15.2168 -0.0179436 14.5547 0.642656L11.3935 3.80376C11.3129 3.88436 11.2519 3.98196 11.2148 4.08936L10.2939 6.76026C10.2001 7.03176 10.2695 7.33256 10.4726 7.53516C10.6157 7.67826 10.8071 7.75486 11.0029 7.75486C11.0849 7.75486 11.1675 7.74166 11.2475 7.71386L13.9184 6.79296C14.0258 6.75586 14.1235 6.69486 14.204 6.61426L17.3651 3.45316C17.6957 3.12256 17.8778 2.68316 17.8778 2.21586C17.8778 1.74806 17.6958 1.30866 17.3652 0.978556Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ArchivePencil;
