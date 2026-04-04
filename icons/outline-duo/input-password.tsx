import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InputPassword({
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
          d="M2 7C2 5.895 2.8954 5 4 5H14C15.1046 5 16 5.895 16 7L15.9686 7.12939C15.8902 7.14509 15.8635 7.15102 15.7928 7.10492C15.205 6.72222 14.5034 6.5 13.75 6.5C11.6794 6.5 10 8.179 10 10.25V10.511C9.1639 11.046 8.5658 12.052 8.4863 13.0981L4 13.0001C2.8954 13.0001 2 12.1051 2 11.0001V7Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M15.75 12.25H11.75C11.1977 12.25 10.75 12.698 10.75 13.25V15.25C10.75 15.802 11.1977 16.25 11.75 16.25H15.75C16.3023 16.25 16.75 15.802 16.75 15.25V13.25C16.75 12.698 16.3023 12.25 15.75 12.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M5.5 10C6.0523 10 6.5 9.552 6.5 9C6.5 8.448 6.0523 8 5.5 8C4.9477 8 4.5 8.448 4.5 9C4.5 9.552 4.9477 10 5.5 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 10C9.5523 10 10 9.552 10 9C10 8.448 9.5523 8 9 8C8.4477 8 8 8.448 8 9C8 9.552 8.4477 10 9 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.75 12.25H11.75C11.1977 12.25 10.75 12.698 10.75 13.25V15.25C10.75 15.802 11.1977 16.25 11.75 16.25H15.75C16.3023 16.25 16.75 15.802 16.75 15.25V13.25C16.75 12.698 16.3023 12.25 15.75 12.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 12.25V10.25C12.25 9.422 12.922 8.75 13.75 8.75C14.578 8.75 15.25 9.422 15.25 10.25V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.2245 6.49628C16.0988 5.51268 15.2681 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.645 1.75 6.75V11.25C1.75 12.355 2.645 13.25 3.75 13.25H7.75"
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

export default InputPassword;
