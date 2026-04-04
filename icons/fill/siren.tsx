import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Siren({
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
          d="M9 3C8.586 3 8.25 2.664 8.25 2.25V0.75C8.25 0.336 8.586 0 9 0C9.414 0 9.75 0.336 9.75 0.75V2.25C9.75 2.664 9.414 3 9 3Z"
          fill={secondaryfill}
        />
        <path
          d="M13.773 4.977C13.581 4.977 13.389 4.904 13.243 4.757C12.95 4.464 12.95 3.989 13.243 3.696L14.304 2.635C14.597 2.342 15.072 2.342 15.365 2.635C15.658 2.928 15.658 3.403 15.365 3.696L14.304 4.757C14.158 4.903 13.965 4.977 13.773 4.977Z"
          fill={secondaryfill}
        />
        <path
          d="M17.25 9.75H15.75C15.336 9.75 15 9.414 15 9C15 8.586 15.336 8.25 15.75 8.25H17.25C17.664 8.25 18 8.586 18 9C18 9.414 17.664 9.75 17.25 9.75Z"
          fill={secondaryfill}
        />
        <path
          d="M4.22701 4.977C4.03501 4.977 3.84301 4.904 3.69701 4.757L2.63601 3.696C2.34301 3.403 2.34301 2.928 2.63601 2.635C2.92901 2.342 3.40401 2.342 3.69701 2.635L4.75801 3.696C5.05101 3.989 5.05101 4.464 4.75801 4.757C4.61201 4.903 4.41901 4.977 4.22701 4.977Z"
          fill={secondaryfill}
        />
        <path
          d="M2.25 9.75H0.75C0.336 9.75 0 9.414 0 9C0 8.586 0.336 8.25 0.75 8.25H2.25C2.664 8.25 3 8.586 3 9C3 9.414 2.664 9.75 2.25 9.75Z"
          fill={secondaryfill}
        />
        <path
          d="M13.25 14.5C12.836 14.5 12.5 14.164 12.5 13.75V9C12.5 7.07 10.93 5.5 9 5.5C7.07 5.5 5.5 7.07 5.5 9V13.75C5.5 14.164 5.164 14.5 4.75 14.5C4.336 14.5 4 14.164 4 13.75V9C4 6.243 6.243 4 9 4C11.757 4 14 6.243 14 9V13.75C14 14.164 13.664 14.5 13.25 14.5Z"
          fill={fill}
        />
        <path
          d="M2.5 14C2.5 13.1716 3.17159 12.5 4 12.5H14C14.8284 12.5 15.5 13.1716 15.5 14V15.5C15.5 16.3284 14.8284 17 14 17H4C3.17159 17 2.5 16.3284 2.5 15.5V14Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 9C7 7.89629 7.89629 7 9 7C9.41421 7 9.75 7.33579 9.75 7.75C9.75 8.16421 9.41421 8.5 9 8.5C8.72471 8.5 8.5 8.72471 8.5 9C8.5 9.41421 8.16421 9.75 7.75 9.75C7.33579 9.75 7 9.41421 7 9Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Siren;
