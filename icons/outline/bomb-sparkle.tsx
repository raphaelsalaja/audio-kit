import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BombSparkle({
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
          d="M12.34 4.158L13.06 3.438C13.546 2.952 14.334 2.952 14.82 3.438L15.7 4.318C16.117 4.735 16.757 4.794 17.237 4.495"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.99297 7.769L8.04697 7.454L7.73098 6.507C7.62898 6.201 7.12197 6.201 7.01997 6.507L6.70398 7.454L5.75798 7.769C5.60498 7.82 5.50098 7.963 5.50098 8.125C5.50098 8.287 5.60498 8.43 5.75798 8.481L6.70398 8.796L7.01997 9.743C7.07097 9.896 7.21398 9.999 7.37498 9.999C7.53598 9.999 7.67998 9.895 7.72998 9.743L8.04597 8.796L8.99197 8.481C9.14497 8.43 9.24898 8.287 9.24898 8.125C9.24898 7.963 9.14597 7.82 8.99297 7.769Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12.6996 8.7935C12.6214 8.1539 12.4392 7.5473 12.168 6.99C12.702 6.457 12.967 6.191 13.501 5.657C13.245 5.222 12.858 4.664 12.289 4.106C11.77 3.597 11.256 3.242 10.844 3L9.511 4.333C8.752 3.963 7.902 3.75 7.001 3.75C3.824 3.75 1.25 6.324 1.25 9.5C1.25 12.676 3.824 15.25 7 15.25C7.4363 15.25 7.8601 15.1998 8.268 15.1068"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.658 13.026L13.395 12.605L12.974 11.342C12.837 10.934 12.162 10.934 12.025 11.342L11.604 12.605L10.341 13.026C10.137 13.094 9.99902 13.285 9.99902 13.5C9.99902 13.715 10.137 13.906 10.341 13.974L11.604 14.395L12.025 15.658C12.093 15.862 12.285 16 12.5 16C12.715 16 12.906 15.862 12.975 15.658L13.396 14.395L14.659 13.974C14.863 13.906 15.001 13.715 15.001 13.5C15.001 13.285 14.862 13.094 14.658 13.026Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M5.25 12.5C5.664 12.5 6 12.1642 6 11.75C6 11.3358 5.664 11 5.25 11C4.836 11 4.5 11.3358 4.5 11.75C4.5 12.1642 4.836 12.5 5.25 12.5Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default BombSparkle;
