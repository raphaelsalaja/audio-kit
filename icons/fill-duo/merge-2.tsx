import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Merge2({
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
          d="M16.25 8.25H9V6.25C9 4.733 7.767 3.5 6.25 3.5H2.75C2.336 3.5 2 3.836 2 4.25C2 4.664 2.336 5 2.75 5H6.25C6.939 5 7.5 5.561 7.5 6.25V11.75C7.5 12.439 6.939 13 6.25 13H2.75C2.336 13 2 13.336 2 13.75C2 14.164 2.336 14.5 2.75 14.5H6.25C7.767 14.5 9 13.267 9 11.75V9.75H16.25V8.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.5 12.5C13.308 12.5 13.116 12.4271 12.97 12.2801C12.677 11.9871 12.677 11.512 12.97 11.219L15.19 8.99905L12.97 6.77902C12.677 6.48602 12.677 6.01104 12.97 5.71804C13.263 5.42504 13.738 5.42504 14.031 5.71804L16.781 8.46804C17.074 8.76104 17.074 9.23602 16.781 9.52902L14.031 12.279C13.885 12.425 13.693 12.499 13.501 12.499L13.5 12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Merge2;
