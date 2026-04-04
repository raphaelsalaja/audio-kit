import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersBookmark({
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
          d="M11 11.7505C11 10.7843 11.7838 10.0005 12.75 10.0005H15.25C16.2162 10.0005 17 10.7843 17 11.7505V17.2505C17 17.5538 16.8173 17.8273 16.537 17.9434C16.2568 18.0595 15.9342 17.9953 15.7197 17.7808L14 16.0611L12.2803 17.7808C12.0658 17.9953 11.7432 18.0595 11.463 17.9434C11.1827 17.8273 11 17.5538 11 17.2505V11.7505Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M10.2569 9.6657C9.30927 9.08481 8.19442 8.74951 7.00003 8.74951C4.56096 8.74951 2.45324 10.1468 1.42474 12.181C0.805407 13.4059 1.47805 14.8468 2.71401 15.276C3.80715 15.6556 5.26802 16.0005 7.00003 16.0005C7.91342 16.0005 8.75148 15.9045 9.49997 15.7582V11.7505C9.49997 10.9571 9.78441 10.23 10.2569 9.6657Z"
          fill={fill}
        />
        <path
          d="M4.25 4.75049C4.25 3.2313 5.48133 2.00049 7 2.00049C8.51867 2.00049 9.75 3.2313 9.75 4.75049C9.75 6.26968 8.51867 7.50049 7 7.50049C5.48133 7.50049 4.25 6.26968 4.25 4.75049Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.5503 7.08782C10.9712 7.34943 11.468 7.50049 12 7.50049C13.5187 7.50049 14.75 6.26968 14.75 4.75049C14.75 3.2313 13.5187 2.00049 12 2.00049C11.468 2.00049 10.9712 2.15155 10.5503 2.41315C10.9926 3.08366 11.25 3.88692 11.25 4.75049C11.25 5.61405 10.9926 6.41732 10.5503 7.08782Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UsersBookmark;
