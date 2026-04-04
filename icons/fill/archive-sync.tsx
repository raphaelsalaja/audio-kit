import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArchiveSync({
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
          d="M16.25 0.5C15.8359 0.5 15.5 0.8359 15.5 1.25V1.6245C14.9276 1.2266 14.2365 1 13.5 1C11.5703 1 10 2.5703 10 4.5C10 6.4297 11.5703 8 13.5 8C14.46 8 15.3877 7.5996 16.0459 6.9019C16.3301 6.6006 16.3154 6.126 16.0147 5.8418C15.7139 5.5571 15.2383 5.5713 14.9542 5.8726C14.5733 6.2774 14.0567 6.5 13.5001 6.5C12.3976 6.5 11.5001 5.603 11.5001 4.5C11.5001 3.397 12.3976 2.5 13.5001 2.5C13.9945 2.5 14.4406 2.6934 14.7953 3H13.7501C13.336 3 13.0001 3.3359 13.0001 3.75C13.0001 4.1641 13.336 4.5 13.7501 4.5H16.2501C16.6642 4.5 17.0001 4.1641 17.0001 3.75V1.25C17.0001 0.8359 16.6641 0.5 16.25 0.5Z"
          fill={secondaryfill}
        />
        <path
          d="M11.75 9.5H15.25C15.6641 9.5 16 9.8359 16 10.25V13.25C16 14.7666 14.7666 16 13.25 16H4.75C3.2334 16 2 14.7666 2 13.25V4.75C2 3.23203 3.23054 2 4.75 2H8.0226C8.43681 2 8.7726 2.33579 8.7726 2.75C8.7726 3.16421 8.43681 3.5 8.0226 3.5H4.75C4.0605 3.5 3.5 4.0605 3.5 4.75V9.5H6.25C6.6641 9.5 7 9.8359 7 10.25V11.75C7 11.8877 7.1123 12 7.25 12H10.75C10.8877 12 11 11.8877 11 11.75V10.25C11 9.8359 11.3359 9.5 11.75 9.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArchiveSync;
