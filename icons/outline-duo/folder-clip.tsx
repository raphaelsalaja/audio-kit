import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderClip({
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
          d="M13.75 6.75C14.855 6.75 15.75 7.645 15.75 8.75V8.79077C15.75 9.10912 15.5059 9.78771 15.2633 9.58155C14.6532 9.06306 13.8633 8.75 13 8.75C11.0674 8.75 9.5 10.3174 9.5 12.25V14.75C9.5 14.8942 9.50696 15.0368 9.51953 15.1777L4.25 15.25C3.145 15.25 2.25 14.355 2.25 13.25V8.75C2.25 7.645 3.145 6.75 4.25 6.75H13.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.25 8.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.201C6.808 2.75 7.381 3.025 7.761 3.498L8.364 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V9.01218"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 9.01562V8.75C15.75 7.646 14.855 6.75 13.75 6.75H4.25C3.145 6.75 2.25 7.646 2.25 8.75V13.25C2.25 14.354 3.145 15.25 4.25 15.25H8.7735"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 14.25V12.25C14.25 11.56 13.69 11 13 11C12.31 11 11.75 11.56 11.75 12.25V14.75C11.75 16.131 12.869 17.25 14.25 17.25C15.631 17.25 16.75 16.131 16.75 14.75V12.75"
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

export default FolderClip;
