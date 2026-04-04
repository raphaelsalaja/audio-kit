import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function JudgementNegative({
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
          d="M9 5.5C10.3807 5.5 11.5 4.381 11.5 3C11.5 1.619 10.3807 0.5 9 0.5C7.6193 0.5 6.5 1.619 6.5 3C6.5 4.381 7.6193 5.5 9 5.5Z"
          fill={fill}
        />
        <path
          d="M9 6.5C6.519 6.5 4.5 8.519 4.5 11C4.5 11.414 4.836 11.75 5.25 11.75H12.75C13.164 11.75 13.5 11.414 13.5 11C13.5 8.519 11.481 6.5 9 6.5Z"
          fill={fill}
        />
        <path
          d="M15.25 10.5H2.75C2.336 10.5 2 10.836 2 11.25C2 11.664 2.336 12 2.75 12H3.5V17.25C3.5 17.664 3.836 18 4.25 18C4.664 18 5 17.664 5 17.25V12H13V17.25C13 17.664 13.336 18 13.75 18C14.164 18 14.5 17.664 14.5 17.25V12H15.25C15.664 12 16 11.664 16 11.25C16 10.836 15.664 10.5 15.25 10.5Z"
          fill={secondaryfill}
        />
        <path
          d="M8.03033 13.2197C7.73744 12.9268 7.26256 12.9268 6.96967 13.2197C6.67678 13.5126 6.67678 13.9874 6.96967 14.2803L7.93934 15.25L6.96967 16.2197C6.67678 16.5126 6.67678 16.9874 6.96967 17.2803C7.26256 17.5732 7.73744 17.5732 8.03033 17.2803L9 16.3107L9.96967 17.2803C10.2626 17.5732 10.7374 17.5732 11.0303 17.2803C11.3232 16.9874 11.3232 16.5126 11.0303 16.2197L10.0607 15.25L11.0303 14.2803C11.3232 13.9874 11.3232 13.5126 11.0303 13.2197C10.7374 12.9268 10.2626 12.9268 9.96967 13.2197L9 14.1893L8.03033 13.2197Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default JudgementNegative;
