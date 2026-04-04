import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxArchive3({
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
          d="M2 4.75C2 4.33579 2.33579 4 2.75 4H15.25C15.6642 4 16 4.33579 16 4.75V14.25C16 15.7682 14.7682 17 13.25 17H4.75C3.23179 17 2 15.7682 2 14.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.99999 1C4.76393 1 4.54163 1.11115 4.39999 1.3L2.15472 4.29369C2.29182 4.11512 2.50746 4 2.74999 4H15.25C15.4928 4 15.7086 4.11536 15.8457 4.29426L13.6 1.3C13.4584 1.11115 13.2361 1 13 1H4.99999Z"
          fill={fill}
        />
        <path
          d="M6.25 7.75C6.25 7.33579 6.58579 7 7 7H11C11.4142 7 11.75 7.33579 11.75 7.75C11.75 8.16421 11.4142 8.5 11 8.5H7C6.58579 8.5 6.25 8.16421 6.25 7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BoxArchive3;
