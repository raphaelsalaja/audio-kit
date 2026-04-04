import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShareUpLeft2({
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
          d="M13.75 5H7.75C6.233 5 5 6.233 5 7.75V13.75C5 15.267 6.233 16.5 7.75 16.5H13.75C15.267 16.5 16.5 15.267 16.5 13.75V7.75C16.5 6.233 15.267 5 13.75 5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.72 9.78003C8.866 9.92603 9.058 10 9.25 10C9.442 10 9.634 9.92703 9.78 9.78003C10.073 9.48703 10.073 9.01199 9.78 8.71899L4.061 3H7C7.414 3 7.75 2.664 7.75 2.25C7.75 1.836 7.414 1.5 7 1.5H2.25C1.836 1.5 1.5 1.836 1.5 2.25V7C1.5 7.414 1.836 7.75 2.25 7.75C2.664 7.75 3 7.414 3 7V4.06104L8.72 9.78003Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ShareUpLeft2;
