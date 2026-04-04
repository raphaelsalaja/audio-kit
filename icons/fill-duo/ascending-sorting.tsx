import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AscendingSorting({
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
          d="M7.75 9H2.75C2.336 9 2 9.336 2 9.75C2 10.164 2.336 10.5 2.75 10.5H7.75C8.164 10.5 8.5 10.164 8.5 9.75C8.5 9.336 8.164 9 7.75 9Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.75 5.5H2.75C2.336 5.5 2 5.836 2 6.25C2 6.664 2.336 7 2.75 7H7.75C8.164 7 8.5 6.664 8.5 6.25C8.5 5.836 8.164 5.5 7.75 5.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M2.75 3.5H12.75C13.164 3.5 13.5 3.164 13.5 2.75C13.5 2.336 13.164 2 12.75 2H2.75C2.336 2 2 2.336 2 2.75C2 3.164 2.336 3.5 2.75 3.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.28 5.71999C12.987 5.42699 12.512 5.42699 12.219 5.71999L9.71902 8.21999C9.42602 8.51299 9.42602 8.988 9.71902 9.281C10.012 9.574 10.487 9.574 10.78 9.281L12 8.061V15.25C12 15.664 12.336 16 12.75 16C13.164 16 13.5 15.664 13.5 15.25V8.061L14.72 9.281C14.866 9.427 15.058 9.501 15.25 9.501C15.442 9.501 15.634 9.428 15.78 9.281C16.073 8.988 16.073 8.51299 15.78 8.21999L13.28 5.71999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AscendingSorting;
