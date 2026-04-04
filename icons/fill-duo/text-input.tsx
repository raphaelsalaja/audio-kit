import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextInput({
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
          d="M13.25 2H4.75C3.231 2 2 3.23 2 4.75V13.25C2 14.77 3.231 16 4.75 16H13.25C14.769 16 16 14.77 16 13.25V4.75C16 3.23 14.769 2 13.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.75 11.5C10.1982 11.5 9.75 11.0513 9.75 10.5V7.5C9.75 6.9487 10.1982 6.5 10.75 6.5C11.1641 6.5 11.5 6.1641 11.5 5.75C11.5 5.3359 11.1641 5 10.75 5C10.0685 5 9.4513 5.27535 9 5.71875C8.5487 5.27535 7.9315 5 7.25 5C6.8359 5 6.5 5.3359 6.5 5.75C6.5 6.1641 6.8359 6.5 7.25 6.5C7.8018 6.5 8.25 6.9487 8.25 7.5V10.5C8.25 11.0513 7.8018 11.5 7.25 11.5C6.8359 11.5 6.5 11.8359 6.5 12.25C6.5 12.6641 6.8359 13 7.25 13C7.9315 13 8.5487 12.7246 9 12.2812C9.4513 12.7246 10.0685 13 10.75 13C11.1641 13 11.5 12.6641 11.5 12.25C11.5 11.8359 11.1641 11.5 10.75 11.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TextInput;
