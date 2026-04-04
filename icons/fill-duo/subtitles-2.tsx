import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Subtitles2({
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
          d="M14.25 2H3.75C2.23122 2 1 3.23122 1 4.75V13.25C1 14.7688 2.23122 16 3.75 16H14.25C15.7688 16 17 14.7688 17 13.25V4.75C17 3.23122 15.7688 2 14.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.75 10H9.75C10.1641 10 10.5 9.6641 10.5 9.25C10.5 8.8359 10.1641 8.5 9.75 8.5H4.75C4.3359 8.5 4 8.8359 4 9.25C4 9.6641 4.3359 10 4.75 10Z"
          fill={fill}
        />
        <path
          d="M13.25 8.5H12.25C11.8359 8.5 11.5 8.8359 11.5 9.25C11.5 9.6641 11.8359 10 12.25 10H13.25C13.6641 10 14 9.6641 14 9.25C14 8.8359 13.6641 8.5 13.25 8.5Z"
          fill={fill}
        />
        <path
          d="M13.25 11.5H8.25C7.8359 11.5 7.5 11.8359 7.5 12.25C7.5 12.6641 7.8359 13 8.25 13H13.25C13.6641 13 14 12.6641 14 12.25C14 11.8359 13.6641 11.5 13.25 11.5Z"
          fill={fill}
        />
        <path
          d="M5.75 11.5H4.75C4.3359 11.5 4 11.8359 4 12.25C4 12.6641 4.3359 13 4.75 13H5.75C6.1641 13 6.5 12.6641 6.5 12.25C6.5 11.8359 6.1641 11.5 5.75 11.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Subtitles2;
