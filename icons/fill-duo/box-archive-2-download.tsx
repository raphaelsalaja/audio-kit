import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxArchive2Download({
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
          d="M9.75 8C9.75 7.58579 9.41421 7.25 9 7.25C8.58579 7.25 8.25 7.58579 8.25 8V11.1893L7.28033 10.2197C6.98744 9.92678 6.51256 9.92678 6.21967 10.2197C5.92678 10.5126 5.92678 10.9874 6.21967 11.2803L8.46967 13.5303C8.76256 13.8232 9.23744 13.8232 9.53033 13.5303L11.7803 11.2803C12.0732 10.9874 12.0732 10.5126 11.7803 10.2197C11.4874 9.92678 11.0126 9.92678 10.7197 10.2197L9.75 11.1893V8Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BoxArchive2Download;
