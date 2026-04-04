import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersKey({
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
          d="M11.25 16.25C12.3546 16.25 13.25 15.3546 13.25 14.25C13.25 13.1454 12.3546 12.25 11.25 12.25C10.1454 12.25 9.25 13.1454 9.25 14.25C9.25 15.3546 10.1454 16.25 11.25 16.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 14.25H17.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.9097 9.8589C8.314 9.6348 7.6743 9.5005 7 9.5005C4.855 9.5005 3 10.7295 2.094 12.5205C1.694 13.3115 2.122 14.2773 2.96 14.5684C3.8479 14.8767 5.0049 15.1475 6.3481 15.2203"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 14.25V15.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7371 6.9756C11.824 6.9866 11.9101 7.0005 12 7.0005C13.243 7.0005 14.25 5.9934 14.25 4.7505C14.25 3.5076 13.243 2.5005 12 2.5005C11.91 2.5005 11.8239 2.51421 11.7369 2.52521"
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

export default UsersKey;
