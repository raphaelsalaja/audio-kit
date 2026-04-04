import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderSend({
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
          d="M4.25 6.75H13.75C14.855 6.75 15.75 7.645 15.75 8.75V9.63081C15.75 9.83717 15.6961 10.1975 15.5016 10.1287C14.7097 9.84876 13.7925 10.0255 13.159 10.659C12.656 11.162 12.4409 11.844 12.5138 12.5H12.25C11.0074 12.5 10 13.5074 10 14.75C10 14.8724 10.0098 14.9926 10.0286 15.1098C10.0456 15.2151 9.88518 15.25 9.7785 15.25H4.25C3.145 15.25 2.25 14.355 2.25 13.25V8.75C2.25 7.645 3.145 6.75 4.25 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14.75 12.25L17.25 14.75L14.75 17.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17 14.75H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 8.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.20099C6.80799 2.75 7.38099 3.02499 7.76099 3.49799L8.36401 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V9.09399"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 9.42331V8.75C15.75 7.646 14.855 6.75 13.75 6.75H4.25C3.145 6.75 2.25 7.646 2.25 8.75V13.25C2.25 14.354 3.145 15.25 4.25 15.25H9.29419"
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

export default FolderSend;
