import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderPlay({
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
          d="M13.75 6.75H4.25C3.145 6.75 2.25 7.645 2.25 8.75V13.25C2.25 14.355 3.145 15.25 4.25 15.25H9.5V11.772C9.5 9.39135 12.0335 8.40616 13.6865 9.38669L15.3617 10.3718L15.4389 10.2984C15.6376 10.1096 15.75 9.84761 15.75 9.57358V8.75C15.75 7.645 14.855 6.75 13.75 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12.539 11.323L16.743 13.8C17.086 14.002 17.086 14.497 16.743 14.699L12.539 17.176C12.19 17.382 11.75 17.131 11.75 16.727V11.772C11.75 11.368 12.191 11.117 12.539 11.323Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.25 8.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.201C6.808 2.75 7.381 3.025 7.761 3.498L8.364 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V9.094"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.539 11.323L16.743 13.8C17.086 14.002 17.086 14.497 16.743 14.699L12.539 17.176C12.19 17.382 11.75 17.131 11.75 16.727V11.772C11.75 11.368 12.191 11.117 12.539 11.323Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 9.73309V8.75C15.75 7.646 14.855 6.75 13.75 6.75H4.25C3.145 6.75 2.25 7.646 2.25 8.75V13.25C2.25 14.354 3.145 15.25 4.25 15.25H8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default FolderPlay;
