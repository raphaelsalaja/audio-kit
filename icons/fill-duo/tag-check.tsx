import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TagCheck({
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
          d="M13 10.5C9.9673 10.5 7.5 8.0327 7.5 5C7.5 3.7515 7.92299 2.60251 8.62669 1.67821C8.32429 1.56611 8.00401 1.5 7.67191 1.5H2.75C1.7852 1.5 1 2.2852 1 3.25V8.17191C1 8.90631 1.28609 9.5967 1.80569 10.1162L7.55569 15.8662C8.09179 16.4023 8.7959 16.6704 9.5 16.6704C10.2041 16.6704 10.9082 16.4023 11.4443 15.8662L15.3662 11.9443C16.0246 11.2859 16.2747 10.3747 16.1246 9.52071C15.2363 10.1367 14.1604 10.5 13 10.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.75 7.5C6.44036 7.5 7 6.94036 7 6.25C7 5.55964 6.44036 5 5.75 5C5.05964 5 4.5 5.55964 4.5 6.25C4.5 6.94036 5.05964 7.5 5.75 7.5Z"
          fill={fill}
        />
        <path
          d="M13 1C10.7939 1 9 2.7944 9 5C9 7.2056 10.7939 9 13 9C15.2061 9 17 7.2056 17 5C17 2.7944 15.2061 1 13 1ZM15.3076 4.252L13.0576 6.752C12.9199 6.9048 12.7256 6.9942 12.5195 6.9996C12.5127 7.0001 12.5068 7.00011 12.5 7.00011C12.3018 7.00011 12.1104 6.9215 11.9697 6.7804L10.7197 5.5304C10.4267 5.2374 10.4267 4.76279 10.7197 4.46989C11.0127 4.17699 11.4873 4.17689 11.7802 4.46989L12.4716 5.1608L14.1923 3.2482C14.4706 2.9416 14.9433 2.9162 15.2519 3.1925C15.5595 3.4698 15.5849 3.9439 15.3076 4.252Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TagCheck;
