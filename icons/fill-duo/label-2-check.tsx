import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Label2Check({
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
          d="M17.833 8.5278L13.8838 3.6504C13.5498 3.2368 13.0547 3 12.5234 3H4.75C3.2334 3 2 4.2334 2 5.75V8.3962C2.8637 7.8315 3.8932 7.5 5 7.5C8.0327 7.5 10.5 9.9673 10.5 13C10.5 13.7061 10.3615 14.3792 10.118 15H12.5235C13.0547 15 13.5499 14.7632 13.8829 14.3511L17.8331 9.4722C18.0558 9.1968 18.0557 8.8032 17.833 8.5278Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5 9C2.7939 9 1 10.7944 1 13C1 15.2056 2.7939 17 5 17C7.2061 17 9 15.2056 9 13C9 10.7944 7.2061 9 5 9ZM7.3076 12.252L5.0576 14.752C4.9199 14.9048 4.7256 14.9942 4.5195 14.9996C4.5127 15.0001 4.5068 15.0001 4.5 15.0001C4.3018 15.0001 4.1104 14.9215 3.9697 14.7804L2.7197 13.5304C2.4267 13.2374 2.4267 12.7628 2.7197 12.4699C3.0127 12.177 3.4873 12.1769 3.7802 12.4699L4.4716 13.1608L6.1923 11.2482C6.4706 10.9416 6.9433 10.9162 7.2519 11.1925C7.5595 11.4698 7.5849 11.9439 7.3076 12.252Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Label2Check;
