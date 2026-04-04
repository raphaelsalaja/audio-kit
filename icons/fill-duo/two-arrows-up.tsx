import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TwoArrowsUp({
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
          d="M12.78 6.71999C12.487 6.42699 12.012 6.42699 11.719 6.71999L8.71899 9.71999C8.42599 10.013 8.42599 10.488 8.71899 10.781C9.01199 11.074 9.48699 11.074 9.77999 10.781L11.5 9.06106V15.25C11.5 15.664 11.836 16 12.25 16C12.664 16 13 15.664 13 15.25V9.06106L14.72 10.781C14.866 10.927 15.058 11.001 15.25 11.001C15.442 11.001 15.634 10.928 15.78 10.781C16.073 10.488 16.073 10.013 15.78 9.71999L12.78 6.71999Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.71999 6.28005C8.86599 6.42605 9.05799 6.50002 9.24999 6.50002C9.44199 6.50002 9.63399 6.42705 9.77999 6.28005C10.073 5.98705 10.073 5.51202 9.77999 5.21902L6.77999 2.21902C6.48699 1.92602 6.01199 1.92602 5.71899 2.21902L2.71899 5.21902C2.42599 5.51202 2.42599 5.98705 2.71899 6.28005C3.01199 6.57305 3.48699 6.57305 3.77999 6.28005L5.49999 4.56008V15.25C5.49999 15.664 5.83599 16 6.24999 16C6.66399 16 6.99999 15.664 6.99999 15.25V4.56106L8.71999 6.28005Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TwoArrowsUp;
