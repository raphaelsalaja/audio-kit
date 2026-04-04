import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MusicNote2Plus({
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
          d="M5.5 2.25C5.5 1.83579 5.16421 1.5 4.75 1.5C4.33579 1.5 4 1.83579 4 2.25V4H2.25C1.83579 4 1.5 4.33579 1.5 4.75C1.5 5.16421 1.83579 5.5 2.25 5.5H4V7.25C4 7.66421 4.33579 8 4.75 8C5.16421 8 5.5 7.66421 5.5 7.25V5.5H7.25C7.66421 5.5 8 5.16421 8 4.75C8 4.33579 7.66421 4 7.25 4H5.5V2.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.5537 1.52615C11.8805 1.43753 12.2261 1.57885 12.3972 1.87103L12.3987 1.87359L12.4089 1.89052C12.4186 1.90646 12.434 1.93153 12.455 1.96482C12.7625 2.45266 14.1033 4.4376 16.124 5.59988C16.483 5.80641 16.6067 6.2649 16.4001 6.62396C16.1936 6.98301 15.7351 7.10666 15.376 6.90013C14.1863 6.2158 13.214 5.30206 12.5 4.49684V13.25C12.5 15.0452 11.0452 16.5 9.25 16.5C7.45479 16.5 6 15.0452 6 13.25C6 11.4548 7.45479 10 9.25 10C9.89437 10 10.4949 10.1874 11 10.5108V2.25001C11 1.9114 11.2269 1.61479 11.5537 1.52615Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default MusicNote2Plus;
