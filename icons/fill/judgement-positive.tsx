import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function JudgementPositive({
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
          d="M11.2073 13.1555C11.5356 13.4081 11.597 13.879 11.3445 14.2073L8.84447 17.4573C8.70402 17.6399 8.48747 17.7478 8.25714 17.75C8.02681 17.7522 7.80824 17.6484 7.66435 17.4685L6.66435 16.2185C6.40559 15.8951 6.45803 15.4231 6.78148 15.1644C7.10492 14.9056 7.57689 14.958 7.83565 15.2815L8.23843 15.785L10.1555 13.2927C10.4081 12.9644 10.879 12.903 11.2073 13.1555Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default JudgementPositive;
