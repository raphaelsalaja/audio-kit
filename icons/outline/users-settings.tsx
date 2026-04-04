import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersSettings({
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
          d="M7 7.0005C8.243 7.0005 9.25 5.9935 9.25 4.7505C9.25 3.5075 8.243 2.5005 7 2.5005C5.757 2.5005 4.75 3.5075 4.75 4.7505C4.75 5.9935 5.757 7.0005 7 7.0005Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 10.0005V11.0005"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.2981 10.9524L15.591 11.6595"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 13.2505H16.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.2981 15.5486L15.591 14.8415"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 16.5005V15.5005"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7019 15.5486L12.409 14.8415"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 13.2505H11.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7019 10.9524L12.409 11.6595"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.9153 9.8555C8.3188 9.6309 7.6762 9.5005 7 9.5005C4.855 9.5005 3 10.7295 2.094 12.5205C1.694 13.3115 2.12201 14.2773 2.96001 14.5684C3.99101 14.9266 5.368 15.2515 7 15.2515C7.5173 15.2515 7.99541 15.2083 8.45621 15.1509"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 15.2505C15.1046 15.2505 16 14.3551 16 13.2505C16 12.1459 15.1046 11.2505 14 11.2505C12.8954 11.2505 12 12.1459 12 13.2505C12 14.3551 12.8954 15.2505 14 15.2505Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.737 6.9756C11.8239 6.9866 11.91 7.0005 12 7.0005C13.243 7.0005 14.25 5.9934 14.25 4.7505C14.25 3.5076 13.243 2.5005 12 2.5005C11.91 2.5005 11.8239 2.5142 11.7369 2.5252"
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

export default UsersSettings;
