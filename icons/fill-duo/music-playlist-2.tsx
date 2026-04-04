import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MusicPlaylist2({
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
          d="M11.5537 1.52615C11.8805 1.43753 12.2261 1.57885 12.3972 1.87103L12.3987 1.87359L12.4089 1.89052C12.4186 1.90646 12.434 1.93153 12.455 1.96482C12.7625 2.45266 14.1033 4.4376 16.124 5.59988C16.483 5.80641 16.6067 6.2649 16.4001 6.62396C16.1936 6.98301 15.7351 7.10666 15.376 6.90013C14.1863 6.2158 13.214 5.30206 12.5 4.49684V13.25C12.5 15.0452 11.0452 16.5 9.25 16.5C7.45479 16.5 6 15.0452 6 13.25C6 11.4548 7.45479 10 9.25 10C9.89437 10 10.4949 10.1874 11 10.5108V2.25001C11 1.9114 11.2269 1.61479 11.5537 1.52615Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1.5 3.75C1.5 3.33579 1.83579 3 2.25 3H8.25C8.66421 3 9 3.33579 9 3.75C9 4.16421 8.66421 4.5 8.25 4.5H2.25C1.83579 4.5 1.5 4.16421 1.5 3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 7.25C1.5 6.83579 1.83579 6.5 2.25 6.5H6.5C6.91421 6.5 7.25 6.83579 7.25 7.25C7.25 7.66421 6.91421 8 6.5 8H2.25C1.83579 8 1.5 7.66421 1.5 7.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MusicPlaylist2;
