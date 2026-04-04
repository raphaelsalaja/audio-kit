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
          d="M5.5 10C6.052 10 6.5 9.552 6.5 9C6.5 8.448 6.052 8 5.5 8C4.948 8 4.5 8.448 4.5 9C4.5 9.552 4.948 10 5.5 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 10C9.552 10 10 9.552 10 9C10 8.448 9.552 8 9 8C8.448 8 8 8.448 8 9C8 9.552 8.448 10 9 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.75 12.25H11.75C11.198 12.25 10.75 12.698 10.75 13.25V15.25C10.75 15.802 11.198 16.25 11.75 16.25H15.75C16.302 16.25 16.75 15.802 16.75 15.25V13.25C16.75 12.698 16.302 12.25 15.75 12.25Z"
          fill="none"
          stroke={secondaryfill}
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
        <path
          d="M12.25 12.25V10.25C12.25 9.422 12.922 8.75 13.75 8.75C14.578 8.75 15.25 9.422 15.25 10.25V12.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default InputPassword;
