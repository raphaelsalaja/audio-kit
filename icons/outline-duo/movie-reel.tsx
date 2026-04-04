import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MovieReel({
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
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 7C9.82843 7 10.5 6.32843 10.5 5.5C10.5 4.67157 9.82843 4 9 4C8.17157 4 7.5 4.67157 7.5 5.5C7.5 6.32843 8.17157 7 9 7Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.5 10.5C13.3284 10.5 14 9.82843 14 9C14 8.17157 13.3284 7.5 12.5 7.5C11.6716 7.5 11 8.17157 11 9C11 9.82843 11.6716 10.5 12.5 10.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 14C9.82843 14 10.5 13.3284 10.5 12.5C10.5 11.6716 9.82843 11 9 11C8.17157 11 7.5 11.6716 7.5 12.5C7.5 13.3284 8.17157 14 9 14Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.5 10.5C6.32843 10.5 7 9.82843 7 9C7 8.17157 6.32843 7.5 5.5 7.5C4.67157 7.5 4 8.17157 4 9C4 9.82843 4.67157 10.5 5.5 10.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default MovieReel;
