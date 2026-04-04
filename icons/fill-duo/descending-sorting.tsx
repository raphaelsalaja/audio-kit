import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DescendingSorting({
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
          d="M10 9.75C10 9.336 9.664 9 9.25 9H2.75C2.336 9 2 9.336 2 9.75C2 10.164 2.336 10.5 2.75 10.5H9.25C9.664 10.5 10 10.164 10 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M2.75 7H9.25C9.664 7 10 6.664 10 6.25C10 5.836 9.664 5.5 9.25 5.5H2.75C2.336 5.5 2 5.836 2 6.25C2 6.664 2.336 7 2.75 7Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M2.75 3.5H12.75C13.164 3.5 13.5 3.164 13.5 2.75C13.5 2.336 13.164 2 12.75 2H2.75C2.336 2 2 2.336 2 2.75C2 3.164 2.336 3.5 2.75 3.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.72 12.22L13.5 13.44V6.25C13.5 5.836 13.164 5.5 12.75 5.5C12.336 5.5 12 5.836 12 6.25V13.439L10.78 12.219C10.487 11.926 10.012 11.926 9.71899 12.219C9.42599 12.512 9.42599 12.987 9.71899 13.28L12.219 15.78C12.365 15.926 12.557 16 12.749 16C12.941 16 13.133 15.927 13.279 15.78L15.779 13.28C16.072 12.987 16.072 12.512 15.779 12.219C15.486 11.926 15.011 11.926 14.718 12.219L14.72 12.22Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DescendingSorting;
