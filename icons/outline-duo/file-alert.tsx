import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileAlert({
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
          d="M10.9111 5.98047L15.25 6.66406V7.70977C15.25 7.91489 15.2005 8.1317 15.0377 8.25657C14.9797 8.30114 14.9203 8.3269 14.8751 8.30086C13.555 7.54094 11.7933 7.78547 10.7559 9.03418L10.627 9.2002L10.6006 9.23828L10.5039 9.37988L7.57129 14.0107C7.13912 14.6932 6.99973 15.441 7.08947 16.1456C7.10177 16.2421 6.93641 16.25 6.83909 16.25H4.75C3.645 16.25 2.75 15.354 2.75 14.25V3.75C2.75 2.646 3.645 1.75 4.75 1.75H10.3359L10.9111 5.98047Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 6.75H7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 9.75H9.3824"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.16 6.24999H11.75C11.198 6.24999 10.75 5.80199 10.75 5.24999V1.85199"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 7.6523V6.664C15.25 6.399 15.145 6.144 14.957 5.957L11.043 2.043C10.855 1.855 10.601 1.75 10.336 1.75H4.75C3.645 1.75 2.75 2.646 2.75 3.75V14.25C2.75 15.354 3.645 16.25 4.75 16.25H6.3489"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 16.75H16.183C16.9711 16.75 17.4495 15.8808 17.0278 15.2149L14.0948 10.5839C13.7022 9.96401 12.7978 9.96401 12.4052 10.5839L9.4722 15.2149C9.0505 15.8807 9.52891 16.75 10.317 16.75H10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 13.25V15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 18C13.6642 18 14 17.6642 14 17.25C14 16.8358 13.6642 16.5 13.25 16.5C12.8358 16.5 12.5 16.8358 12.5 17.25C12.5 17.6642 12.8358 18 13.25 18Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FileAlert;
