import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CodePullRequest({
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
          d="M8.19939 3.75C8.19939 3.33579 8.53517 3 8.94939 3H12.25C13.7692 3 15 4.23079 15 5.75V12.25C15 12.6642 14.6642 13 14.25 13C13.8358 13 13.5 12.6642 13.5 12.25V5.75C13.5 5.05921 12.9408 4.5 12.25 4.5H8.94939C8.53517 4.5 8.19939 4.16421 8.19939 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.5303 0.96967C11.8232 1.26256 11.8232 1.73744 11.5303 2.03033L9.81066 3.75L11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033C11.2374 6.82322 10.7626 6.82322 10.4697 6.53033L8.21967 4.28033C7.92678 3.98744 7.92678 3.51256 8.21967 3.21967L10.4697 0.96967C10.7626 0.676777 11.2374 0.676777 11.5303 0.96967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3.75 5C4.16421 5 4.5 5.33579 4.5 5.75V12.25C4.5 12.6642 4.16421 13 3.75 13C3.33579 13 3 12.6642 3 12.25V5.75C3 5.33579 3.33579 5 3.75 5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.75 6C5.13071 6 6.25 4.88071 6.25 3.5C6.25 2.11929 5.13071 1 3.75 1C2.36929 1 1.25 2.11929 1.25 3.5C1.25 4.88071 2.36929 6 3.75 6Z"
          fill={fill}
        />
        <path
          d="M3.75 17C5.13071 17 6.25 15.8807 6.25 14.5C6.25 13.1193 5.13071 12 3.75 12C2.36929 12 1.25 13.1193 1.25 14.5C1.25 15.8807 2.36929 17 3.75 17Z"
          fill={fill}
        />
        <path
          d="M14.25 17C15.6307 17 16.75 15.8807 16.75 14.5C16.75 13.1193 15.6307 12 14.25 12C12.8693 12 11.75 13.1193 11.75 14.5C11.75 15.8807 12.8693 17 14.25 17Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CodePullRequest;
