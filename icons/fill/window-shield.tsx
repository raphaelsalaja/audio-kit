import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowShield({
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
          d="M8.25 14.5H3.75C3.0596 14.5 2.5 13.9404 2.5 13.25V8H16.25C16.6642 8 17 7.6642 17 7.25V4.75C17 3.2312 15.7688 2 14.25 2H3.75C2.2312 2 1 3.2312 1 4.75V13.25C1 14.7688 2.2312 16 3.75 16H8.25C8.664 16 9 15.6602 9 15.25C9 14.8398 8.664 14.5 8.25 14.5ZM7 4C7.552 4 8 4.4502 8 5C8 5.5498 7.552 6 7 6C6.448 6 6 5.5498 6 5C6 4.4502 6.448 4 7 4ZM4 4C4.552 4 5 4.4502 5 5C5 5.5498 4.552 6 4 6C3.448 6 3 5.5498 3 5C3 4.4502 3.448 4 4 4Z"
          fill={fill}
        />
        <path
          d="M17.061 11.3199L14.311 10.0699C14.114 9.97994 13.887 9.97994 13.69 10.0699L10.94 11.3199C10.672 11.4399 10.501 11.7099 10.501 12V14.9399C10.501 16.9899 13.461 17.8799 13.799 17.9698C13.865 17.9898 13.933 17.9999 14.001 17.9999C14.069 17.9999 14.137 17.9898 14.203 17.9698C14.54 17.8798 17.501 16.9899 17.501 14.9399V12C17.501 11.71 17.328 11.4399 17.061 11.3199ZM16 14.9399C16 15.55 14.873 16.1799 14 16.4698V11.5699L16 12.4799V14.9399Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default WindowShield;
