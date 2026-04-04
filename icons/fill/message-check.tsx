import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageCheck({
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
          d="M14 9C11.7939 9 10 10.7944 10 13C10 15.2056 11.7939 17 14 17C16.2061 17 18 15.2056 18 13C18 10.7944 16.2061 9 14 9ZM16.3076 12.252L14.0576 14.752C13.9199 14.9048 13.7256 14.9942 13.5195 14.9996C13.3213 14.9996 13.1104 14.9215 12.9697 14.7804L11.7197 13.5304C11.4267 13.2374 11.4267 12.7628 11.7197 12.4699C12.0127 12.177 12.4873 12.1769 12.7802 12.4699L13.4716 13.1608L15.1923 11.2482C15.4706 10.9416 15.9433 10.9162 16.2519 11.1925C16.5595 11.4698 16.5849 11.9439 16.3076 12.252Z"
          fill={secondaryfill}
        />
        <path
          d="M8.79364 14.7754C8.6033 14.2183 8.5 13.621 8.5 13C8.5 9.96609 10.9654 7.5 14 7.5C15.1063 7.5 16.1369 7.82773 17 8.39123V4.25C17 2.733 15.767 1.5 14.25 1.5H3.75C2.233 1.5 1 2.733 1 4.25V11.25C1 12.767 2.233 14 3.75 14H5V16.25C5 16.538 5.165 16.801 5.425 16.926C5.529 16.976 5.64 17 5.75 17C5.917 17 6.083 16.944 6.219 16.835L8.79364 14.7754Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MessageCheck;
