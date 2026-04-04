import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderCheck({
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
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V6.5H16.5V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34569 3.02827C7.82347 2.37825 7.03552 2 6.201 2H4.25Z"
          fill={fill}
        />
        <path
          d="M13 10C10.7939 10 9 11.7944 9 14C9 16.2056 10.7939 18 13 18C15.2061 18 17 16.2056 17 14C17 11.7944 15.2061 10 13 10ZM15.3076 13.252L13.0576 15.752C12.9199 15.9048 12.7256 15.9942 12.5195 15.9996C12.3213 15.9996 12.1104 15.9215 11.9697 15.7804L10.7197 14.5304C10.4267 14.2374 10.4267 13.7628 10.7197 13.4699C11.0127 13.177 11.4873 13.1769 11.7802 13.4699L12.4716 14.1608L14.1923 12.2482C14.4706 11.9416 14.9433 11.9162 15.2519 12.1925C15.5595 12.4698 15.5849 12.9439 15.3076 13.252Z"
          fill={fill}
        />
        <path
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H7.87589C7.63324 15.3799 7.5 14.7053 7.5 14C7.5 10.9661 9.96535 8.5 13 8.5C14.3289 8.5 15.5487 8.97292 16.5 9.75935V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FolderCheck;
