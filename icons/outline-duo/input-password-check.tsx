import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InputPasswordCheck({
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
          d="M14 7.5C14.7061 7.5 15.3792 7.63868 16 7.88208V7C16 5.895 15.105 5 14 5H4C2.895 5 2 5.895 2 7V11C2 12.105 2.895 13 4 13L8.48241 13.0941C8.48241 10.0614 10.9673 7.5 14 7.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
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
          d="M16.25 7.17578V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V11.25C1.75 12.354 2.645 13.25 3.75 13.25H7.7627"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 9C11.7939 9 10 10.7944 10 13C10 15.2056 11.7939 17 14 17C16.2061 17 18 15.2056 18 13C18 10.7944 16.2061 9 14 9ZM16.3076 12.252L14.0576 14.752C13.9199 14.9048 13.7256 14.9942 13.5195 14.9996C13.5127 15.0001 13.5068 15.0001 13.5 15.0001C13.3018 15.0001 13.1104 14.9215 12.9697 14.7804L11.7197 13.5304C11.4267 13.2374 11.4267 12.7628 11.7197 12.4699C12.0127 12.177 12.4873 12.1769 12.7802 12.4699L13.4716 13.1608L15.1923 11.2482C15.4706 10.9416 15.9433 10.9162 16.2519 11.1925C16.5595 11.4698 16.5849 11.9439 16.3076 12.252Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default InputPasswordCheck;
