import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextOutdentRight({
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
          d="M15.25 13.5H2.75C2.336 13.5 2 13.836 2 14.25C2 14.664 2.336 15 2.75 15H15.25C15.664 15 16 14.664 16 14.25C16 13.836 15.664 13.5 15.25 13.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M2.75 11.5H9.25C9.664 11.5 10 11.164 10 10.75C10 10.336 9.664 10 9.25 10H2.75C2.336 10 2 10.336 2 10.75C2 11.164 2.336 11.5 2.75 11.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M2.75 8H9.25C9.664 8 10 7.664 10 7.25C10 6.836 9.664 6.5 9.25 6.5H2.75C2.336 6.5 2 6.836 2 7.25C2 7.664 2.336 8 2.75 8Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 3H2.75C2.336 3 2 3.336 2 3.75C2 4.164 2.336 4.5 2.75 4.5H15.25C15.664 4.5 16 4.164 16 3.75C16 3.336 15.664 3 15.25 3Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.53 6.21999C13.237 5.92699 12.762 5.92699 12.469 6.21999C12.176 6.51299 12.176 6.98803 12.469 7.28103L14.189 9.001L12.469 10.721C12.176 11.014 12.176 11.489 12.469 11.782C12.615 11.928 12.807 12.002 12.999 12.002C13.191 12.002 13.383 11.929 13.529 11.782L15.779 9.53201C16.072 9.23901 16.072 8.76397 15.779 8.47097L13.529 6.22097L13.53 6.21999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TextOutdentRight;
