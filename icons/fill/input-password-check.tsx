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
          d="M5.5 10C6.052 10 6.5 9.552 6.5 9C6.5 8.448 6.052 8 5.5 8C4.948 8 4.5 8.448 4.5 9C4.5 9.552 4.948 10 5.5 10Z"
          fill={fill}
        />
        <path
          d="M9 10C9.552 10 10 9.552 10 9C10 8.448 9.552 8 9 8C8.448 8 8 8.448 8 9C8 9.552 8.448 10 9 10Z"
          fill={fill}
        />
        <path
          d="M7.7627 14H3.75C2.2334 14 1 12.7666 1 11.25V6.75C1 5.2334 2.2334 4 3.75 4H14.25C15.7666 4 17 5.2334 17 6.75V7.17578C17 7.58988 16.6641 7.92578 16.25 7.92578C15.8359 7.92578 15.5 7.58988 15.5 7.17578V6.75C15.5 6.0605 14.9395 5.5 14.25 5.5H3.75C3.0605 5.5 2.5 6.0605 2.5 6.75V11.25C2.5 11.9395 3.0605 12.5 3.75 12.5H7.7627C8.1768 12.5 8.5127 12.8359 8.5127 13.25C8.5127 13.6641 8.1768 14 7.7627 14Z"
          fill={fill}
        />
        <path
          d="M14 9C11.7939 9 10 10.7944 10 13C10 15.2056 11.7939 17 14 17C16.2061 17 18 15.2056 18 13C18 10.7944 16.2061 9 14 9ZM16.3076 12.252L14.0576 14.752C13.9199 14.9048 13.7256 14.9942 13.5195 14.9996C13.5127 15.0001 13.5068 15.0001 13.5 15.0001C13.3018 15.0001 13.1104 14.9215 12.9697 14.7804L11.7197 13.5304C11.4267 13.2374 11.4267 12.7628 11.7197 12.4699C12.0127 12.177 12.4873 12.1769 12.7802 12.4699L13.4716 13.1608L15.1923 11.2482C15.4706 10.9416 15.9433 10.9162 16.2519 11.1925C16.5595 11.4698 16.5849 11.9439 16.3076 12.252Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default InputPasswordCheck;
